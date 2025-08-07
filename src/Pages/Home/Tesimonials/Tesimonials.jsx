import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import testy from'../../../assets/home/testy.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '@smastrom/react-rating/style.css'
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

const Tesimonials = () => {
    const [reviews, setReviews] =useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=> res.json())
        .then(data=>{
            setReviews(data)
        })

    },[])
    return (
      <section className="my-20">
        <SectionTitle 
        subHeading={'What Our Clint Say'}
        heading={'testimonials'}
        >

        </SectionTitle>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
       {
        reviews.map(review=><SwiperSlide key={review._id}>
            

            <div className="m-24 flex flex-col items-center space-y-2 mx-24 my-16">
                <img className="h-[100px] mb-2" src={testy} alt="" />
         
            <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
                <p>{review.details}</p>
                <h3 className="text-2xl font-semibold text-orange-500">{review.name}</h3>
            </div>
        </SwiperSlide>)
       }
      </Swiper>
      </section>
    );
};

export default Tesimonials;