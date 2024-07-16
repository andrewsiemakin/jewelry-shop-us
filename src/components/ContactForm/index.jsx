"use client";

import s from "./ContactForm.module.scss";

import {useState} from "react";
import { useMask } from '@react-input/mask';

import { IoMdClose } from "react-icons/io";

import {useGoogleReCaptcha} from "react-google-recaptcha-v3";
import {validate} from "@/actions/reCaptcha";
import SuccessfulPopup from "@/components/SuccessfulPopup";
import {Noto_Serif_JP} from "next/font/google";

const defaultForm = {
    name: "",
    email: "",
    phone: "",
    description: "",
}

const defaultError = {
    name: false,
    email: false,
    phone: false,
    description: false,
}

const noto = Noto_Serif_JP({ subsets: ["latin"], weight: "600" })


const ContactForm = ({popup, onClose}) => {
    const inputRef = useMask({ mask: '+1 (___) ___-____', replacement: { _: /\d/ }, showMask: true });

    const {executeRecaptcha} = useGoogleReCaptcha()

    const [open, setOpen] = useState(false);
    const [form, setForm] = useState(defaultForm);

    const [error, setError] = useState(defaultError);

    const handleChange = (key) => (event) => {
        setForm(prevState => ({
            ...prevState,
            [key]: event.target.value
        }));
    }

    const handleRequiredCheck = () => {
        const {name, email, phone, description} = form

        let errorsList = {
            name: false,
            email: false,
            phone: false,
            description: false
        }

        if(!name) {
            errorsList.name = true
        }
        if(!email) {
            errorsList.email = true
        }
        if(!phone) {
            errorsList.phone = true
        }
        if(!description) {
            errorsList.description = true
        }

        setError(errorsList)
        return Object.keys(errorsList).map(key => errorsList[key])
    }

    const verifyRecaptcha = async () => {
        if(!executeRecaptcha) {
            console.log("not available execute recaptcha")
            return
        }

        const gRecaptchaToken = await executeRecaptcha("inquirySubmit")

        const res = await validate(gRecaptchaToken);

        return res?.success;
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        const errors = handleRequiredCheck()

        if (errors.includes(true)) {
            return
        }

        setOpen(true);

        const verified = await verifyRecaptcha();

        if(verified) {
            setOpen(true);

            console.log("reCaptcha - verified");

            return fetch('/api/contact-us', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
        }

        return alert("reCaptcha is not verified");
    };

    const handleClose = () => {
        setForm(defaultForm);
        setError(defaultError);
        setOpen(false);
        if(popup) {
            onClose()
        }
    }

    return (
        <form className={[s.wrapper, open ? s.open : ""].join(" ")} onSubmit={onSubmit}>
            {popup &&
                <IoMdClose className={s.closeBtn} onClick={onClose}/>
            }
            <h4 className={[noto.className, s.title].join(" ")}>Send us a message</h4>
            <div className={s.formSection}>
                <input
                    className={[s.input, error.name ? s.error : ""].join(" ")}
                    value={form.name}
                    onChange={handleChange("name")}
                    type="text"
                    placeholder="Name"
                />
                <input
                    ref={inputRef}
                    className={[s.input, error.phone ? s.error : ""].join(" ")}
                    value={form.phone}
                    onChange={handleChange("phone")}
                    type="text"
                    placeholder="Phone"
                />
                <input
                    className={[s.input, error.email ? s.error : ""].join(" ")}
                    value={form.email}
                    onChange={handleChange("email")}
                    type="email"
                    placeholder="Email"
                />
                <div className={[s.textAreaField, error.description ? s.error : ""].join(" ")}>
                    <textarea
                        className={s.textArea}
                        value={form.description}
                        onChange={handleChange("description")}
                        placeholder="Message"
                    >
                    </textarea>
                </div>
                <button className={s.button}>Submit</button>
            </div>
            <SuccessfulPopup open={open} onClose={handleClose}/>
        </form>
    );
};

export default ContactForm;