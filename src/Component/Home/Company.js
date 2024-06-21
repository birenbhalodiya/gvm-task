import React from 'react'
import { CompanyImg } from '../../Helper/Constants'

const Company = () => {
    return (
        <div className='bg-bg flex items-center gap-10 justify-center py-10'>
            {[1, 1, 1, 1, 1].map((ele, i) => {
                return (
                    <img key={i} src={CompanyImg} alt='' />
                )
            })}
        </div>
    )
}

export default Company
