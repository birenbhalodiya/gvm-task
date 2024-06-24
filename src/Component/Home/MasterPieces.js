import React from 'react'
import Heading from '../Common/Heading'
import { masterPieces } from '../../Helper/Constants'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
const MasterPieces = () => {
    return (
        <div className='bg-bg overflow-hidden'>
            <div className='container m-auto lg:py-20 md:py-16 sm:py-12 py-8'>
                <Heading head='Latest masterpieces' pageLink='Discover More Masterpieces' />
                <div className='pt-5'>
                    <div>
                        <Swiper
                            spaceBetween={10}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                1200: {
                                    slidesPerView: 4.5,
                                },
                                1000: {
                                    slidesPerView: 4,
                                },
                                800: {
                                    slidesPerView: 3,
                                },
                                600: {
                                    slidesPerView: 2.5,
                                },
                                0: {
                                    slidesPerView: 1.3,
                                }
                            }}
                            grabCursor={true}
                            modules={[Autoplay]}
                            className="mySwiper"
                            loop={true}
                        >
                            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((ele, i) => {
                                return (
                                    <SwiperSlide key={i}>
                                        <img key={i} src={masterPieces} alt='' className='' />
                                    </SwiperSlide>
                                )
                            })}

                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MasterPieces
