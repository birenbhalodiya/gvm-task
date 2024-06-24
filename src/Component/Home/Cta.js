import React from 'react'
import { ctaImage } from '../../Helper/Constants'
import Button from '../Common/Button'


const Cta = () => {
    return (
        <div className='bg-[#0F172A] max-h-[550px] h-screen w-full text-white overflow-hidden'>
            <div className='flex items-end lg:justify-center h-full container m-auto pt-20 relative'>
                <div className='lg:w-1/2 h-full flex flex-col sm:justify-center gap-5 max-w-[500px] relative z-10 sm:pt-0 pt-10'>
                    <div className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl leading-tight font-extrabold'>Add more masterpieces to your growing collection</div>
                    <Button buttonName={'Join Now'} className='border-2 border-white text-white rounded-[5px] w-fit' />
                </div>
                <div className='lg:w-1/2 w-[80%] lg:relative absolute z-0 right-0'>
                    <img src={ctaImage} alt='banner-image' />
                </div>
            </div>
        </div>
    )
}

export default Cta
