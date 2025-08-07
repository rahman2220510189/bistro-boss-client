import Recomends from "../../Pages/Recommends/Recomends";
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';
const OrderdBy = ({item}) => {
    // const pagination = {
    //     clickable: true,
    //     renderBullet: function (index, className) {
    //       return '<span class="' + className + '">' + (index + 1) + '</span>';
    //     },
    // }
    return (
        <div className='grid md:grid-cols-3 mt-4 gap-4'>
        {
            item.map(rec=><Recomends key={rec._id} rec={rec}></Recomends>)
        } 
         {/* <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide >
            <div className="grid md:grid-cols-3 mt-4 gap-4">
        {
            item.map(rec=><Recomends key={rec._id} rec={rec}></Recomends>)
        }
        </div> 
             </SwiperSlide>
       
      </Swiper> */}
      </div>
   
    );
};

export default OrderdBy; 

