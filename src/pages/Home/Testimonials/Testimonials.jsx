import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect( () => {
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    } , [])

    return (
      <section className="my-24">
        <SectionTitle
          subHeading={"What Our Client Say"}
          heading={"Testimonials"}
        ></SectionTitle>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {
            reviews.map(review => <SwiperSlide
                key={review._id}
            >
                <div className="m-24 text-center space-y-4">
                    <Rating
                        style={{ maxWidth: 180 }}
                        value={review.rating}
                        readOnly
                        className="mx-auto"
                        />
                    <FaQuoteLeft className="mx-auto text-6xl" />
                    <p>{review.details}</p>
                    <h3 className="text-2xl text-yellow-600">{review.name}</h3>
                </div>
            </SwiperSlide>)
          }
        </Swiper>
      </section>
    );
};

export default Testimonials;