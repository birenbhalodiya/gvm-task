import { ArrowRight } from 'lucide-react'
import React from 'react'

const Heading = ({ head, pageLink }) => {
    return (
        <div className='flex justify-between items-center'>
            <div className='text-[40px] font-bold'>{head}</div>
            <div className='text-link font-medium flex items-center gap-2'>
                <div>{pageLink}</div>
                <ArrowRight className='w-5 h-5' />
            </div>
        </div>
    )
}

export default Heading
