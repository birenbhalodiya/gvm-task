import React from 'react'
import { CompanyImg } from '../../Helper/Constants'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
const Company = () => {

    return (
        <div className='bg-bg flex items-center gap-10 justify-center py-10'>
            <div className='container m-auto'>
                <Swiper
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        1200: {
                            slidesPerView: 6,
                        },
                        1000: {
                            slidesPerView: 5,
                        },
                        800: {
                            slidesPerView: 4,
                        },
                        600: {
                            slidesPerView: 3,
                        },
                        0: {
                            slidesPerView: 1.5,
                        }
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                    loop={true}
                >
                    {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((ele, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <img src={CompanyImg} alt='' />
                            </SwiperSlide>
                        )
                    })}

                </Swiper>
            </div>
        </div>
    )
}

export default Company
