import React from 'react'
import Heading from '../Common/Heading'
import { eventsImage } from '../../Helper/Constants'

const Events = () => {
    return (
        <div className='container m-auto py-20'>
            <Heading head='Art events' pageLink='Explore All Events' />
            <div className='pt-5 flex justify-between gap-7'>
                {[1, 1, 1].map((ele, i) => {
                    return (
                        <div key={i}>
                            <img src={eventsImage} alt='' className='' />
                            <div className='text-2xl font-bold pt-3 pb-1'>Wild Horse Event</div>
                            <div className='text-lg'>Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Events
