import React from 'react'
import { ctaImage } from '../../Helper/Constants'
import Button from '../Common/Button'


const Cta = () => {
    return (
        <div className='bg-[#0F172A] max-h-[550px] h-screen w-full text-white'>
            <div className='flex items-end justify-center h-full container m-auto'>
                <div className='w-1/2 h-full flex flex-col justify-center gap-5'>
                    <div className='text-5xl leading-tight font-extrabold'>Add more masterpieces to your growing collection</div>
                    <Button buttonName={'Join Now'} className='border-2 border-white text-white rounded-[5px] w-fit' />
                </div>
                <div className='w-1/2'>
                    <img src={ctaImage} alt='banner-image' />
                </div>
            </div>
        </div>
    )
}

export default Cta
