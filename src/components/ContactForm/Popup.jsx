import s from "./ContactForm.module.scss";

import Portal from "@/components/Portal";

import ContactForm from "./";
import {useEffect, useState} from "react";

const Popup = ({open, onClose}) => {
    const [cls, setCls] = useState("")

    useEffect(() => {
        if(open){
            setCls(s.visible)
        } else {
            setCls("")
        }
    }, [open])

    return (
        <Portal open={open}>
            <div className={[s.popup, cls].join(" ")}>
                <ContactForm popup onClose={onClose}/>
            </div>
        </Portal>
    )
}

export default Popup