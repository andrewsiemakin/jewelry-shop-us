import s from "./Header.module.scss";

import {useEffect, useState} from "react";

import {Noto_Serif_JP} from "next/font/google";

import Button from "@/components/Button";

import ring from "@/images/ring.png";
import handWatch from "@/images/hand-watch.svg";
import violin from "@/images/violin.svg";

const noto = Noto_Serif_JP({ subsets: ["latin"], weight: "600" })

const images = [ring, handWatch, violin];

const Header = ({handlePopup}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animationClass, setAnimationClass] = useState(s.fadeIn);

    useEffect(() => {
        setAnimationClass(s.fadeIn);
        const timer = setTimeout(() => {
            setAnimationClass('');
        }, 1000);

        return () => clearTimeout(timer);
    }, [currentIndex]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className={s.firstSection}>
            <div className={s.left}>
                <div className={s.imageWrapper}>
                    <div
                        key={currentIndex}
                        className={`${s.image} ${animationClass}`}
                        style={{
                            backgroundImage: `url(${images[currentIndex].src})`,
                        }}
                   />
                    <div className={`${s.shadow} ${animationClass}`}/>
                </div>
            </div>
            <div className={s.right}>
                <h4 className={[noto.className, s.title].join(" ")}>Whether you are looking to </h4>
                <p className={s.description}>sell, pawn, or get a loan, we are here to help.</p>
                <Button onClick={handlePopup}/>
            </div>
        </section>
    )
}

export default Header