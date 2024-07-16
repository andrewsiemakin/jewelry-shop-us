import Portal from "@/components/Portal";

import ContactForm from "./";

const Popup = ({open, onClose}) => {
    return (
        <Portal open={open}>
            <ContactForm popup onClose={onClose}/>
        </Portal>
    )
}

export default Popup