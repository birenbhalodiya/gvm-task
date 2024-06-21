import React from 'react'
import { BannerImg } from '../../Helper/Constants'
import Input from '../Common/Input'
import Button from '../Common/Button'
const bannerBudge = [
    'Oil Painting', 'Abstract Art', 'Sculpture', 'Art Deco', 'Pop Art'
]

const Banner = () => {
    return (
        <div className='bg-primary max-h-[600px] h-screen w-full text-white'>
            <div className='flex items-end justify-center h-full container m-auto pt-20'>
                <div className='w-1/2 h-full flex flex-col justify-center gap-5'>
                    <div className='text-6xl font-extrabold'>Search the work of the best artists</div>
                    <div className='flex gap-2'>
                        <Input placeholder='search for artists, work name, or category' className={'w-[400px]'} />
                        <Button buttonName={'Search'} className={'bg-[#BE123C]'} />
                    </div>
                    <div className='flex gap-2'>
                        {bannerBudge.map((ele, i) => {
                            return (
                                <div key={i} className='px-3 py-1 border border-white rounded-[5px] text-xs'>
                                    {ele}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='w-1/2'>
                    <img src={BannerImg} alt='banner-image' />
                </div>
            </div>
        </div>
    )
}

export default Banner
