"use client";

import s from "./page.module.scss";

import {createContext, useContext, useState} from "react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import Popup from "@/components/ContactForm/Popup";

const defaultData = {
    open: false,
    handlePopup: () => {},
    blocksRef: null
}

const MainContext = createContext(defaultData)

const MainProvider = ({ children }) => {
    const [open, setOpen] = useState(false);
    const blocksRef = useIntersectionObserver(s.visible)

    const handlePopup = () => setOpen(!open)

    const values = {
        open,
        handlePopup,
        blocksRef
    }

    return (
        <MainContext.Provider value={values}>
            {children}
            <Popup open={open} onClose={handlePopup}/>
        </MainContext.Provider>
    )
}

const useMainContext = () => useContext(MainContext)

export {useMainContext}
export default MainProvider