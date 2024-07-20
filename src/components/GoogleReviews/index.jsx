"use client";

import s from "./GoogleReviews.module.scss";

import {useMainContext} from "@/app/MainContext";

import Button from "@/components/Button";
import GoogleReviewsCarousel from "@/components/GoogleReviewsCarousel";

const GoogleReviews = ({className, reviews}) => {
    const {blocksRef, handlePopup} = useMainContext()

    const newRef = (el) => blocksRef.current[4] = el

    return (
        <div ref={newRef} className={[s.wrapper, className].join(" ")}>
            <h4 className={[s.reviewTitle].join(" ")}>Testimonials</h4>
            <GoogleReviewsCarousel reviews={reviews}/>
            <Button className={s.button} onClick={handlePopup}>Request a Quote</Button>
        </div>
    );
};

export default GoogleReviews;