import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from'../../../assets/home/slide1.jpg'
import slide2 from'../../../assets/home/slide2.jpg'
import slide3 from'../../../assets/home/slide3.jpg'
import slide4 from'../../../assets/home/slide4.jpg'
import slide5 from'../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <div className="w-full px-4 md:px-8 lg:px-12">
            <SectionTitle 
            subHeading={'From 11.00am to 10.00pm'}
            heading={'Order Online'}
            >
            </SectionTitle>
         <section>
         <Swiper 
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          480: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-16 md:mb-24"
      >
        <SwiperSlide className="relative overflow-hidden rounded-lg">
          <img src={slide1} alt="Salads" className="w-full h-48 md:h-64 object-cover" />
          <h3 className='text-2xl md:text-4xl uppercase text-center -mt-16 md:-mt-20 text-white relative z-10'> Salads</h3>
        </SwiperSlide>
        <SwiperSlide className="relative overflow-hidden rounded-lg">
          <img src={slide2} alt="Pizza" className="w-full h-48 md:h-64 object-cover" />
          <h3 className='text-2xl md:text-4xl uppercase text-center -mt-16 md:-mt-20 text-white relative z-10'> pizza</h3>
        </SwiperSlide>
        <SwiperSlide className="relative overflow-hidden rounded-lg">
          <img src={slide3} alt="Soup" className="w-full h-48 md:h-64 object-cover" />
          <h3 className='text-2xl md:text-4xl uppercase text-center -mt-16 md:-mt-20 text-white relative z-10'> soup</h3>
        </SwiperSlide>
        <SwiperSlide className="relative overflow-hidden rounded-lg">
          <img src={slide4} alt="Desserts" className="w-full h-48 md:h-64 object-cover" />
          <h3 className='text-2xl md:text-4xl uppercase text-center -mt-16 md:-mt-20 text-white relative z-10'> Desserts</h3>
        </SwiperSlide>
        <SwiperSlide className="relative overflow-hidden rounded-lg">
          <img src={slide5} alt="Salads" className="w-full h-48 md:h-64 object-cover" />
          <h3 className='text-2xl md:text-4xl uppercase text-center -mt-16 md:-mt-20 text-white relative z-10'> Salads</h3>
        </SwiperSlide>
      </Swiper>
         </section>
        </div>
    );
};

export default Category;