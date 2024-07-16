"use client"

import s from "./page.module.scss";
import {useState} from "react";

import Header from "@/components/blocks/Header";

import Popup from "@/components/ContactForm/Popup";
import WhySection from "@/components/blocks/WhySection";
import AboutUsSection from "@/components/blocks/AboutUsSection";
import StepsSection from "@/components/StepsSection";

import Form from "@/components/Form";
import LoansSection from "@/components/LoansSection";
import MapsSection from "@/components/MapsSection";
import ReviewBlock from "@/components/ReviewBlock";
import PhoneImage from "@/components/PhoneImage";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

export default function Home() {
    const [open, setOpen] = useState(false);
    const blocksRef = useIntersectionObserver(s.visible)

    const handlePopup = () => setOpen(!open)

    return (
        <>
            <Header handlePopup={handlePopup}/>
            <PhoneImage/>
            <WhySection/>
            <AboutUsSection newRef={(el) => blocksRef.current[1] = el} className={s.hidden}/>
            <StepsSection handlePopup={handlePopup} newRef={(el) => blocksRef.current[2] = el} className={s.hidden}/>
            <LoansSection newRef={(el) => blocksRef.current[3] = el} className={s.hidden}/>
            <ReviewBlock handlePopup={handlePopup} newRef={(el) => blocksRef.current[4] = el} className={s.hidden}/>
            <MapsSection newRef={(el) => blocksRef.current[5] = el} className={s.hidden}/>
            <Form newRef={(el) => blocksRef.current[6] = el} className={s.hidden}/>
            <Popup open={open} onClose={handlePopup}/>
        </>
    );
}
