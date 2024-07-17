"use client"

import s from './Nav.module.scss'

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import {Montserrat} from "next/font/google";

import logoImage from "../../images/logo-image.svg"

import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import Popup from "@/components/ContactForm/Popup";

const montserrat = Montserrat({ subsets: ["latin"]})

const Nav = () => {
    const [open, setOpen] = useState(false)
    const [current, setCurrent] = useState("")

    const [openPopup, setOpenPopup] = useState(false);

    const handlePopup = () => setOpenPopup(!openPopup)

    const handleLinkClick = (link) => () => {
        setCurrent(link)
        setOpen(false)
    }

    const generateClassName = (link) => [s.navlink, montserrat.className, link === current ? s.active : ""].join(" ")

    const toggleMenu = () => {
        setOpen(!open);
    };

    return (
        <nav className={[s.wrapper, open ? s.open : ""].join(" ")}>
            <div className={s.header}>
                <Image src={logoImage} alt="logo image"/>
                {
                    open ?
                        <AiOutlineClose onClick={toggleMenu} className={s.burgerBtn}/> :
                        <AiOutlineMenu onClick={toggleMenu} className={s.burgerBtn} />
                }
            </div>
            <div className={s.linksSection}>
                <Link
                    className={generateClassName("home")}
                    href="/#home"
                    onClick={handleLinkClick("home")}
                >
                    Home
                </Link>
                <Link
                    className={generateClassName("loans")}
                    href="/#loans-section"
                    onClick={handleLinkClick("loans")}
                >
                    Pawn Loans or Sale
                </Link>
                <Link
                    className={generateClassName("about-us")}
                    href="/#about-us"
                    onClick={handleLinkClick("about-us")}
                >
                    About Us
                </Link>
                <Link
                    className={generateClassName("contact")}
                    href="#"
                    onClick={handlePopup}
                >
                    Contact
                </Link>
            </div>
            <div className={s.phoneNumbersSection}>
                <a href="tel:3106800776">310-680-0776</a>
                <span>|</span>
                <a href="tel:3103987296">310-398-7296</a>
            </div>

            <div className={s.mobileNavContent}>
                <Link
                    className={generateClassName("home")}
                    href="/#home"
                    onClick={handleLinkClick("home")}
                >
                    Home
                </Link>
                <Link
                    className={generateClassName("about-us")}
                    href="/#about-us"
                    onClick={handleLinkClick("about-us")}
                >
                    About Us
                </Link>
                <Link
                    className={generateClassName("contact")}
                    href="#"
                    onClick={handlePopup}
                >
                    Contact
                </Link>
                <Link
                    className={generateClassName("loans")}
                    href="/#loans-section"
                    onClick={handleLinkClick("loans")}
                >
                    Pawn Loans or Sale
                </Link>
                <div className={s.phoneSectionDevice}>
                    <a href="tel:3106800776">310-680-0776</a>
                    <span>|</span>
                    <a href="tel:3103987296">310-398-7296</a>
                </div>
            </div>
            <Popup open={openPopup} onClose={handlePopup}/>
        </nav>
    );
};

export default Nav;
