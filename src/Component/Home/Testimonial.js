import React from 'react'
import { testimonialImage } from '../../Helper/Constants'

const Testimonial = () => {
    return (
        <div className='py-20 bg-bg'>
            <div className='container m-auto flex items-center justify-center gap-16'>
                <div className='w-1/2'>
                    <img src={testimonialImage} alt='' />
                </div>
                <div className='w-1/2 flex flex-col gap-5'>
                    <div className='text-lg text-secondary'>Marie Poirot, Co-Founder <span className='text-link'>Art-Gal</span></div>
                    <div className='text-2xl'>“Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. Neque suspendisse a habitasse commodo.”</div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
