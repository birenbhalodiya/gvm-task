import React from 'react'
import { SocialIcon } from '../../Helper/Constants'
import { Badge } from 'lucide-react'

const Footer = () => {
    return (
        <div className='py-10 container m-auto'>
            <div>
                <div className='flex justify-between'>
                    {[1, 1, 1, 1, 1, 1].map((item, i) => {
                        return (
                            <div key={i}>
                                <div className='text-[#475569] mb-5 font-medium flex items-center gap-2 justify-center'>
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
                    <div className='flex justify-between pb-7'>
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
