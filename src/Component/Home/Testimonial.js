import React from 'react'
import { testimonialImage } from '../../Helper/Constants'

const Testimonial = () => {
    return (
        <div className='lg:py-20 md:py-16 sm:py-12 py-8 bg-bg'>
            <div className='container m-auto flex md:flex-row flex-col items-center justify-center lg:gap-16 md:gap-12 sm:gap-8 gap-5'>
                <div className='md:w-1/2'>
                    <img src={testimonialImage} alt='' />
                </div>
                <div className='md:w-1/2 flex flex-col sm:gap-5 gap-3'>
                    <div className='sm:text-lg text-secondary'>Marie Poirot, Co-Founder <span className='text-link'>Art-Gal</span></div>
                    <div className='md:text-2xl sm:text-xl text-lg'>“Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. Neque suspendisse a habitasse commodo.”</div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
