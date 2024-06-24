import React from 'react'
import { BannerImg } from '../../Helper/Constants'
import Input from '../Common/Input'
import Button from '../Common/Button'
const bannerBudge = [
    'Oil Painting', 'Abstract Art', 'Sculpture', 'Art Deco', 'Pop Art'
]

const Banner = () => {
    return (
        <div className='bg-primary max-h-[700px] h-screen w-full text-white overflow-hidden'>
            <div className='flex items-end lg:justify-center h-full container m-auto pt-20 relative'>
                <div className='lg:w-full h-full flex flex-col sm:justify-center gap-5 lg:max-w-auto max-w-[500px] relative z-10 sm:pt-0 pt-10'>
                    <div className='lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-extrabold'>Search the work of the best artists</div>
                    <div className='flex gap-2'>
                        <Input placeholder='search for artists, work name, or category' className={'sm:w-[400px]'} />
                        <Button buttonName={'Search'} className={'bg-[#BE123C]'} />
                    </div>
                    <div className='flex gap-2 flex-wrap'>
                        {bannerBudge.map((ele, i) => {
                            return (
                                <div key={i} className='px-3 py-1 border border-white rounded-[5px] text-xs'>
                                    {ele}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='lg:w-full w-[80%] lg:relative absolute z-0 right-0'>
                    <img src={BannerImg} alt='banner-image' />
                </div>
            </div>
        </div>
    )
}

export default Banner
