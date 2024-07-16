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

export default function Home() {
    const [open, setOpen] = useState(false);



    const handlePopup = () => setOpen(!open)

    return (
        <>
            <Header handlePopup={handlePopup}/>
            <PhoneImage/>
            <WhySection/>
            <AboutUsSection/>
            <StepsSection handlePopup={handlePopup}/>
            <LoansSection/>
            <ReviewBlock handlePopup={handlePopup}/>
            <MapsSection/>
            <Form/>
            <Popup open={open} onClose={handlePopup}/>
        </>
    );
}
