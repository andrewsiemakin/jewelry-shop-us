import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./reset.css";

import s from "./GoogleReviewsCarousel.module.scss"

import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';


const GoogleReviewsCarousel = ({ reviews }) => {
    const settings = {
        dots: false,
        speed: 500,
        infinity: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="slider-container">
        <Slider {...settings}>
            {reviews.map((review, index) => (
                <div key={index} className={s.reviewCard}>
                    <div className={s.reviewHeader}>
                        <img src={review.profile_photo_url} alt={review.author_name} className={s.profilePhoto}/>
                        <div className={s.authorInfo}>
                            <a href={review.author_url || '#'} target="_blank" rel="noopener noreferrer">
                                {review.author_name}
                            </a>
                            <div className={s.rating}>
                                {Array(review.rating).fill().map((_, i) => (
                                    <FaStar key={i} color="#ffc107"/>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={s.reviewText}>
                        <p>{review.text}</p>
                    </div>
                    <div className={s.reviewFooter}>
                        <small>{review.relative_time_description}</small>
                    </div>
                </div>
            ))}
        </Slider>
        </div>
    );
};

export default GoogleReviewsCarousel;