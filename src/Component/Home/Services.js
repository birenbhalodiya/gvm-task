import React from 'react'
import { nibhViverra } from '../../Helper/Constants'
import Button from '../Common/Button'

const Services = () => {
    return (
        <div className='container m-auto lg:py-20 md:py-16 sm:py-12 py-8'>
            <div className='md:text-[40px] sm:text-[30px] text-[25px] font-bold text-center'>Expanding services</div>
            <div className='lg:py-16 sm:py-12 py-8 flex lg:flex-nowrap flex-wrap justify-center gap-8'>
                {[1, 1, 1, 1, 1, 1].map((ele, i) => {
                    return (
                        <div key={i} className='flex flex-col items-center gap-1 md:w-[15%] max-w-[150px]'>
                            <img src={nibhViverra} alt='' className='m-auto' />
                            <div className='text-xl font-medium'>Nibh viverra</div>
                        </div>
                    )
                })}
            </div>
            <div>
                <Button buttonName={'Find Services'} className={'bg-[#BE123C] text-white w-fit m-auto'} />
            </div>
        </div>
    )
}

export default Services
