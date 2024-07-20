"use client";

import s from "./AboutUsSection.module.scss"

import {useMainContext} from "@/app/MainContext";

import Image from "next/image"

import Container from "@/components/Container"

import aboutUs from "@/images/about-us.png"

const AboutUsSection = ({className}) => {
    const {blocksRef} = useMainContext()
    const newRef = (el) => blocksRef.current[1] = el

    return (
        <Container newRef={newRef} section className={[s.wrapper, className].join(" ")} id="about-us">
            <Image src={aboutUs} alt="about us" id="about-us"/>
            <div className={s.content}>
                <h4 className={[s.aboutTitle].join(" ")}>About us</h4>
                <p className={[s.description].join(" ")}>Since 1994, Azul Jewelry and Loan has been
                    providing
                    trusted pawn services and quality products. With decades
                    of experience, we pride ourselves on offering fair valuations,
                    competitive loan terms, and a wide selection of items for sale.
                </p>
                <p className={[s.description].join(" ")}>
                    Our commitment to exceptional customer service and
                    integrity has made us a reliable choice for all your
                    pawnshop needs. Whether you're looking to buy, sell, or
                    secure a loan, Azul Jewelry and Loan is here to help you
                    every step of the way. Visit us today to experience the
                    difference that over 30 years of expertise can make.</p>
            </div>
        </Container>
    )
}

export default AboutUsSection