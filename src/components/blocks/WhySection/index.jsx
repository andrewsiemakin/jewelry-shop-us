import s from "./WhySection.module.scss"

import Image from "next/image";

import Container from "@/components/Container";

import ringVertical from "@/images/ring-vertical.svg";

const WhySection = () => {
    return (
        <Container section className={s.wrapper}>
            <p className={[s.chooseUsTitle].join(" ")}>Why should you choose us?</p>
            <div className={s.chooseUsDescription}>
                <div className={s.item}>
                    <p className={s.itemTitle}>Large</p>
                    <p className={s.itemDescription}>selection of merchandise</p>
                </div>
                <div className={s.item}>
                    <p className={s.itemTitle}>We pay</p>
                    <p className={s.itemDescription}>more for your pawn</p>
                </div>
                <div className={s.item}>
                    <p className={s.itemTitle}>Items 20% OFF</p>
                    <p className={s.itemDescription}>when you make a purchase</p>
                </div>
                <div className={s.item}>
                    <p className={s.itemTitle}>All products</p>
                    <p className={s.itemDescription}>come with a warranty</p>
                </div>
            </div>
            <Image className={s.verticalRing} src={ringVertical} alt="choose us"/>
        </Container>
    )
}

export default WhySection