"use client"

import s from "./Footer.module.scss";
import Image from "next/image";

import arrow from "../../icons/arrow-icon.png";
import logo from "../../images/main-logo-image-white.svg";

import Link from "next/link";
import {Noto_Serif_JP} from "next/font/google";

const Footer = () => {
    return (
        <footer className={s.wrapper}>
            <div className={s.first}>
                <div className={s.sendMessageWrapper}>
                    <div className={[s.sendMessage].join(" ")}>
                        Send us a message
                    </div>
                    <Image src={arrow} alt="arrow icon"/>
                </div>
                <div className={s.copyrights}>
                    © 2024 by Jack's Jewelry and Loan - Pawn shop.
                </div>
            </div>
            <div className={s.divider}></div>
            <div className={s.second}>
                <Image src={logo} alt="logo image"/>
                <div className={s.infoSection}>
                    <div className={s.infoBlock}>
                        <h4 className={s.infoTitle}>Email</h4>
                        <a href="mailto:jack@jackpownshop.com" className={s.infoDescription}>azulpawnshop@gmail.com</a>
                    </div>
                    <div className={s.infoBlock}>
                        <h4 className={s.infoTitle}>Telephone</h4>
                        <a href="tel:3106800776" className={s.infoDescription}>(323) 585-5585</a>
                    </div>
                    <div className={s.infoBlock}>
                        <h4 className={s.infoTitle}>Address</h4>
                        <p className={s.infoDescription}>
                            Azul Pawn Shop Huntington
                            Park 2644 <br/> E Florence Ave, 
                            Huntington Park, CA 90255
                        </p>

                    </div>
                    <Link href="/policy" className={s.privacyStatement}>Privacy Statement</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
