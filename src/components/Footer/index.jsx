"use client"

import s from "./Footer.module.scss";
import Image from "next/image";

import arrow from "../../icons/arrow-icon.png";
import logo from "../../images/logo-white.svg";

import Link from "next/link";
import { Noto_Serif_JP} from "next/font/google";

const noto = Noto_Serif_JP({ weight: "500", subsets: ["latin"] });

const Footer = () => {
    return (
        <footer className={s.wrapper}>
            <div className={s.first}>
                <div className={s.sendMessageWrapper}>
                    <div className={[s.sendMessage, noto.className].join(" ")}>
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
                        <a href="mailto:jack@jackpownshop.com" className={s.infoDescription}>jack@jackpownshop.com</a>
                    </div>
                    <div className={s.infoBlock}>
                        <h4 className={s.infoTitle}>Telephone</h4>
                        <a href="tel:3106800776" className={s.infoDescription}>310-680-0776</a>
                        <div className={s.telephoneDivider}></div>
                        <a href="tel:3103987296" className={s.infoDescription}>310-398-7296</a>
                    </div>
                    <div className={s.infoBlock}>
                        <h4 className={s.infoTitle}>Address</h4>
                        <p className={s.infoDescription}>
                            <a href="https://maps.app.goo.gl/evPjofFGDyB2XCcD7">
                                4025 Sepulveda Blvd, Culver City, CA 90230
                            </a>
                            <br/>
                            310-398-7296 | 9:00 AM to 6:00 PM</p>
                        <div className={s.infoDivider}></div>
                        <p className={s.infoDescription}>
                            <a href="https://maps.app.goo.gl/vuqXg7Zhe48tHMVt8">
                                10721 Hawthorne Blvd, Inglewood, CA 90304
                            </a>
                            <br/>
                            310-680-0776 | 9:00 AM to 6:00 PM</p>
                    </div>
                    <Link href="/policy" className={s.privacyStatement}>Privacy Statement</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
