import React from 'react'
import { nibhViverra } from '../../Helper/Constants'
import Button from '../Common/Button'

const Services = () => {
    return (
        <div className='container m-auto py-20'>
            <div className='text-[40px] font-bold text-center'>Expanding services</div>
            <div className='py-16 flex justify-center gap-8'>
                {[1, 1, 1, 1, 1, 1].map((ele, i) => {
                    return (
                        <div key={i} className='flex flex-col items-center gap-1 w-[15%]'>
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
