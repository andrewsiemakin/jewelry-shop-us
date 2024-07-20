"use client";

import s from "./Form.module.scss";

import {useState} from "react";

import {useMainContext} from "@/app/MainContext";

import {useMask} from "@react-input/mask";
import {useGoogleReCaptcha} from "react-google-recaptcha-v3";
import {validate} from "@/actions/reCaptcha";
import DragAndDropInput from "./ui/DragAndDropInput";
import SuccessfulPopup from "@/components/SuccessfulPopup";
import Container from "@/components/Container";
import Image from "next/image";
import guitar from "@/images/guitar-image-bg.png";
import watch from "@/images/watch-image-bg.png";

const defaultForm = {
    name: "",
    email: "",
    phone: "",
    description: "",
    location: "Hawthorne Blvd, Inglewood", // Set default location here
    images: [],
};

const defaultError = {
    name: false,
    email: false,
    phone: false,
    description: false,
    location: false,
    images: false,
};

const Form = ({className}) => {
    const {blocksRef} = useMainContext()

    const newRef = (el) => blocksRef.current[6] = el

    const inputRef = useMask({
        mask: "+1 (___) ___-____",
        replacement: {_: /\d/},
        showMask: true,
    });

    const {executeRecaptcha} = useGoogleReCaptcha();

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState(defaultForm);

    const [error, setError] = useState(defaultError);

    const handleChange = (key) => (event) => {
        setForm((prevState) => ({
            ...prevState,
            [key]: event.target.value,
        }));
    };

    const handleRadioButton = (key, text) => {
        setForm((prevState) => ({
            ...prevState,
            [key]: text,
        }));
    };

    const handleLoadImage = (images) => {
        setForm((prevState) => ({
            ...prevState,
            images,
        }));
    };

    const handleRequiredCheck = () => {
        const {name, email, phone, description, location, images} = form;

        let errorsList = {
            name: !name,
            email: !email,
            phone: !phone,
            description: !description,
            location: !location,
            images: images.length === 0,
        };

        setError(errorsList);

        return Object.values(errorsList);
    };

    const verifyRecaptcha = async () => {
        if (!executeRecaptcha) {
            console.log("Execute recaptcha is not available.");
            return false;
        }

        const gRecaptchaToken = await executeRecaptcha("inquirySubmit");
        const res = await validate(gRecaptchaToken);

        return res?.success;
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        const errors = handleRequiredCheck();

        if (errors.includes(true)) {
            return;
        }

        const verified = await verifyRecaptcha();

        if (verified) {
            setLoading(true);
            setOpen(true);

            console.log("reCaptcha verified");

            try {
                const response = await fetch("/api/sell-items", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(form),
                });

                if (response.ok) {
                    setLoading(false);
                } else {
                    throw new Error("Failed to submit form.");
                }
            } catch (error) {
                console.error("Error submitting form:", error);
                setLoading(false);
            }

            return;
        }

        alert("reCaptcha verification failed.");
    };

    const handleClose = () => {
        setForm(defaultForm);
        setError(defaultError);
        setOpen(false);
    };

    return (
        <Container newRef={newRef} section className={[s.container, className].join(" ")}>
            <form className={s.wrapper} onSubmit={onSubmit}>
                <h4 className={[s.title].join(" ")}>
                    Looking to Sell Items?
                </h4>
                <div className={s.formSection}>
                    <input
                        className={[s.input, error.name ? s.error : ""].join(" ")}
                        value={form.name}
                        type="text"
                        placeholder="Name"
                        onChange={handleChange("name")}
                    />
                    <input
                        className={[s.input, error.email ? s.error : ""].join(" ")}
                        value={form.email}
                        type="email"
                        placeholder="Email"
                        onChange={handleChange("email")}
                    />
                    <input
                        className={[s.input, error.phone ? s.error : ""].join(" ")}
                        value={form.phone}
                        ref={inputRef}
                        type="text"
                        placeholder="Phone or Text Number"
                        onChange={handleChange("phone")}
                    />
                </div>
                <div className={[s.textAreaField, error.description ? s.error : ""].join(" ")}>
                    <label>Describe Your Item</label>
                    <textarea
                        value={form.description}
                        maxLength="500"
                        className={s.textArea}
                        placeholder="Details like your watch model and jewelry information, certificate etc."
                        onChange={handleChange("description")}
                    ></textarea>
                </div>
                <p className={s.numOfChars}>{form.description.length ?? 0} of 500 max characters</p>
                <div className={s.checkboxSection}>
                    <h4 className={s.checkboxSectionTitle}>
                        Which Location Would You <br/>
                        Like To Visit
                    </h4>
                    <div className={[s.checkbox, error.location ? s.errorRadioBtn : ""].join(" ")}>
                        <input
                            type="radio"
                            id="hawthorne"
                            checked={form.location === "Hawthorne Blvd, Inglewood"}
                            onChange={() => handleRadioButton("location", "Hawthorne Blvd, Inglewood")}
                        />
                        <label htmlFor="hawthorne" className={s.checkboxDescription}>
                            Florence Ave, Huntington Park
                        </label>
                    </div>
                </div>
                <DragAndDropInput sent={open} onLoad={handleLoadImage} className={error.images ? s.error : ""}>
                    <button className={s.buttonForm}>Get Quote</button>
                </DragAndDropInput>
                <SuccessfulPopup open={open} loading={loading} onClose={handleClose}/>
            </form>
            <Image src={watch} className={s.watch} alt="watch"/>
            <Image src={guitar} className={s.guitar} alt="guitar"/>
        </Container>
    );
};

export default Form;
