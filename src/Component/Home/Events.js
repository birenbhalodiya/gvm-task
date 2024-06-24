import React from 'react'
import Heading from '../Common/Heading'
import { eventsImage } from '../../Helper/Constants'

const Events = () => {
    return (
        <div className='container m-auto lg:py-20 md:py-16 sm:py-12 py-8'>
            <Heading head='Art events' pageLink='Explore All Events' />
            <div className='pt-5 grid md:grid-cols-3 sm:grid-cols-2 sm:gap-7 gap-4'>
                {[1, 1, 1].map((ele, i) => {
                    return (
                        <div key={i}>
                            <img src={eventsImage} alt='' className='' />
                            <div className='md:text-2xl sm:text-xl text-lg font-bold pt-3 pb-1'>Wild Horse Event</div>
                            <div className='sm:text-lg'>Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Events
