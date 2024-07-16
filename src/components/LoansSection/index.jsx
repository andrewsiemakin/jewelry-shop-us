import React from 'react';
import s from "./LoansSection.module.scss"

import watches from "../../icons/watch-icon.png"
import gold from "../../icons/gold-icon.png"
import diamond from "../../icons/diamond-icon.png"
import silver from "../../icons/silver-icon.png"
import tools from "../../icons/tools-icon.png"
import guitar from "../../icons/guitar-icon.png"

import Image from "next/image";
import {Noto_Serif_JP} from "next/font/google";

const noto = Noto_Serif_JP({ subsets: ["latin"], weight: "600" })

const LoansSection = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.acceptSection}>
                <h3 className={[noto.className, s.acceptTitle].join(" ")}>We accept</h3>
                <div className={s.productsSection}>
                    <div className={s.productBlock}>
                        <Image src={watches} alt="watches icon"/>
                        <p className={s.productDescription}>Watches</p>
                    </div>
                    <div className={s.productBlock}>
                        <Image src={gold} alt="gold icon"/>
                        <p className={s.productDescription}>Gold</p>
                    </div>
                    <div className={s.productBlock}>
                        <Image src={diamond} alt="diamond icon"/>
                        <p className={s.productDescription}>Diamonds</p>
                    </div>
                    <div className={s.productBlock}>
                        <Image src={silver} alt="silver icon"/>
                        <p className={s.productDescription}>Silver</p>
                    </div>
                    <div className={s.productBlock}>
                        <Image src={tools} alt="tools icon"/>
                        <p className={s.productDescription}>Tools</p>
                    </div>
                    <div className={s.productBlock}>
                        <Image src={guitar} alt="guitar icon"/>
                        <p className={s.productDescription}>Musical
                            Instruments</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoansSection;