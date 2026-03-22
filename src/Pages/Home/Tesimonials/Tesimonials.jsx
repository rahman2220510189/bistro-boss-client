import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import testy from'../../../assets/home/testy.png'
import 'swiper/css';
import 'swiper/css/navigation';
import '@smastrom/react-rating/style.css'
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

const Tesimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch('https://bistro-boss-server-production-d1dd.up.railway.app/reviews')
        .then(res=> res.json())
        .then(data=>{
            setReviews(data)
        })
    },[])

    return (
      <section className="my-12 md:my-20 px-4 md:px-8 lg:px-16">
        <SectionTitle 
        subHeading={'What Our Clint Say'}
        heading={'testimonials'}
        >
        </SectionTitle>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
            reviews.map(review =>
                <SwiperSlide key={review._id}>
                    <div className="flex flex-col items-center space-y-3 px-6 py-8 md:px-16 md:py-12 lg:px-24 lg:py-16 text-center">
                        <img className="h-16 md:h-24 lg:h-[100px] mb-2" src={testy} alt="reviewer" />
                        <Rating
                            style={{ maxWidth: 140 }}
                            value={review.rating}
                            readOnly
                        />
                        <p className="text-sm md:text-base text-gray-600 max-w-xl leading-relaxed">{review.details}</p>
                        <h3 className="text-xl md:text-2xl font-semibold text-orange-500">{review.name}</h3>
                    </div>
                </SwiperSlide>
            )
        }
        </Swiper>
      </section>
    );
};

export default Tesimonials;