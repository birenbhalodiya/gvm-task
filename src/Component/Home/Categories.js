import React from 'react'
import Heading from '../Common/Heading'
import { categoriesImg } from '../../Helper/Constants'

const Categories = () => {
    return (
        <div className='container m-auto lg:py-20 md:py-16 sm:py-12 py-8'>
            <Heading head='Featured art categories' pageLink='View All Categories' />
            <div className='pt-5 grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-3'>
                {[1, 1, 1, 1, 1].map((ele, i) => {
                    return (
                        <img key={i} src={categoriesImg} alt='' className='lg:w-[220px] w-full' />
                    )
                })}
            </div>
        </div>
    )
}

export default Categories
