import React from 'react'
import Heading from '../Common/Heading'
import { masterPieces } from '../../Helper/Constants'

const MasterPieces = () => {
    return (
        <div className='bg-bg overflow-hidden'>
            <div className='container m-auto py-20'>
                <Heading head='Latest masterpieces' pageLink='Discover More Masterpieces' />
                <div className='pt-5 flex justify-between gap-3'>
                    {[1, 1, 1, 1, 1].map((ele, i) => {
                        return (
                            <img key={i} src={masterPieces} alt='' className='' />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default MasterPieces
