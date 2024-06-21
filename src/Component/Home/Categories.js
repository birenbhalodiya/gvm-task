import React from 'react'
import Heading from '../Common/Heading'
import { categoriesImg } from '../../Helper/Constants'

const Categories = () => {
    return (
        <div className='container m-auto py-20'>
            <Heading head='Featured art categories' pageLink='View All Categories' />
            <div className='pt-5 flex justify-between'>
                {[1, 1, 1, 1, 1].map((ele, i) => {
                    return (
                        <img key={i} src={categoriesImg} alt=''  className='w-[220px]'/>
                    )
                })}
            </div>
        </div>
    )
}

export default Categories
