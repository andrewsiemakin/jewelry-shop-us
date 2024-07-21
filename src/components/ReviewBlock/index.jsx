import GoogleReviews from "@/components/GoogleReviews";

const getReviews = async () => {
    const api = process.env.GOOGLE_MAPS_API_KEY;
    const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJNYqMzj7JwoARB1rdFn_3dYc&fields=reviews&reviews_sort=newest&key=${api}`);
    return await response.json();
}

const ReviewBlock = async ({className}) => {
    const reviews = await getReviews()

    console.log(reviews)

    return (
        <GoogleReviews className={className} reviews={reviews?.result?.reviews ?? []} />
    );
};

export default ReviewBlock;