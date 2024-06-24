import React from 'react'
import { SocialIcon } from '../../Helper/Constants'
import { Badge } from 'lucide-react'

const Footer = () => {
    return (
        <div className='md:py-10 sm:py-9 py-8 container m-auto'>
            <div>
                <div className='grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 justify-between sm:gap-7 gap-6'>
                    {[1, 1, 1, 1, 1, 1].map((item, i) => {
                        return (
                            <div key={i} className=''>
                                <div className='text-[#475569] sm:mb-5 mb-3 font-medium flex items-center gap-2'>
                                    <Badge className='w-5 h-5' />
                                    <div>Categories</div>
                                </div>
                                <div className='grid gap-3'>
                                    {[1, 1, 1, 1, 1, 1].map((item, i) => {
                                        return (
                                            <div key={i} className='text-[#475569]'>User Interface</div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <hr className='border border-bg my-10' />
                <div>
                    <div className='flex sm:flex-nowrap flex-wrap justify-between sm:pb-7 pb-4 gap-3'>
                        <div>@ 2023 Xinder, Inc. All rights reserved.</div>
                        <div>
                            <img src={SocialIcon} alt='' />
                        </div>
                    </div>
                    <div className='text-xs text-[#475569]'>In sed posuere sed ullamcorper feugiat. Lacinia elit neque, ipsum, non. Tellus mattis enim volutpat habitasse. Semper posuere lectus consectetur aliquam et ullamcorper. Dictumst aenean justo fames diam eget volutpat vestibulum elit. Blandit aliquet bibendum pellentesque turpis id penatibus faucibus id nunc. Aenean rhoncus, erat pellentesque eu. Quis morbi condimentum phasellus in ultricies eu amet.</div>
                </div>
            </div>
        </div>
    )
}

export default Footer
