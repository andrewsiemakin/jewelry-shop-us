import s from "./GoogleReviews.module.scss";

import { useEffect, useState } from 'react';

const GoogleReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);
    const googleApiKey = 'YOUR_GOOGLE_API_KEY'; // Replace with your actual API key
    const placeId = 'YOUR_PLACE_ID'; // Replace with your Google Maps Place ID

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get(
                    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${googleApiKey}`
                );

                if (response.data && response.data.result && response.data.result.reviews) {
                    setReviews(response.data.result.reviews);
                }
            } catch (err) {
                setError(err);
            }
        };

        fetchReviews();
    }, [googleApiKey, placeId]);

    if (error) {
        return <div>Error fetching reviews: {error.message}</div>;
    }

    return (
        <div>
            <h2>Google Reviews</h2>
            {reviews.length > 0 ? (
                reviews.map((review, index) => (
                    <div key={index}>
                        <h4>{review.author_name}</h4>
                        <p>{review.text}</p>
                        <p>Rating: {review.rating}</p>
                        <hr />
                    </div>
                ))
            ) : (
                <p>No reviews available.</p>
            )}
        </div>
    );
};

export default GoogleReviews;