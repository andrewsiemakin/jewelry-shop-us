import s from "./AboutUsSection.module.scss"

import Image from "next/image"

import Container from "@/components/Container"

import aboutUs from "@/images/about-us.png"
import {Montserrat, Noto_Serif_JP} from "next/font/google";

const noto = Noto_Serif_JP({weight: "600", subsets: ["latin"]});
const mont = Montserrat({weight: "400", subsets: ["latin"]});

const AboutUsSection = ({newRef, className}) => {
    return (
        <Container newRef={newRef} section className={[s.wrapper, className].join(" ")} id="about-us">
            <Image src={aboutUs} alt="about us" id="about-us"/>
            <div className={s.content}>
                <h4 className={[s.aboutTitle, noto.className].join(" ")}>About us</h4>
                <p className={[s.description, mont.className].join(" ")}>Since 1994, Azul Jewelry and Loan has been
                    providing
                    trusted pawn services and quality products. With decades
                    of experience, we pride ourselves on offering fair valuations,
                    competitive loan terms, and a wide selection of items for sale.
                </p>
                <p className={[s.description, mont.className].join(" ")}>
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