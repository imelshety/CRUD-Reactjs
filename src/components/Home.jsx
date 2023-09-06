// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Home = () => {
    return (

        <Swiper
            className='mt-10 mb-10 sm:w-full'
            // install Swiper modules
            modules={[Navigation, Pagination,]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        >
            <SwiperSlide><img src="../../public/assets/pexels-photo-12429032.jpeg" alt="image-1" className='w-1/2 m-auto rounded' /></SwiperSlide>
            <SwiperSlide><img src="../../public/assets/omage-2.jpg" alt="image-1" className='w-1/2 m-auto  rounded' /></SwiperSlide>
            <SwiperSlide><img src="../../public/assets/image-3.jpg" alt="image-1" className='w-1/2 m-auto  rounded' /></SwiperSlide>
            <SwiperSlide><img src="../../public/assets/image-4.jpg" alt="image-1" className='w-1/2 m-auto  rounded' /></SwiperSlide>
        </Swiper>
    )
}

export default Home