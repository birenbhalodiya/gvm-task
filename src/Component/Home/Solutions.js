import React from 'react'
import { SolutionImage } from '../../Helper/Constants'
import Button from '../Common/Button'
import { Check } from 'lucide-react'

const points = [
    'Interdum volutpat turpis malesuada ac turpis.',
    'Tortor ipsum pretium quis nunc.',
    'Vitae odio a id purus in.',
]

const Solutions = () => {
    return (
        <div className='bg-secondary py-20 text-white'>
            <div className='container m-auto flex items-center justify-center gap-16'>
                <div className='w-1/2 flex flex-col gap-5'>
                    <div className='text-[52px] leading-none font-extrabold'>Best solutions for your demanding collection</div>
                    <div className='text-lg max-w-[95%]'>Odio vulputate cras vel lacinia turpis volutpat adipiscing. Sollicitudin at velit, blandit tempus nunc in.</div>
                    <div className='flex flex-col gap-1'>
                        {points.map((ele, i) => {
                            return (
                                <div key={i} className='flex items-center justify-start gap-3'>
                                    <Check />
                                    <div className='text-lg'>{ele}</div>
                                </div>
                            )
                        })}
                    </div>
                    <Button buttonName={'Explore Xinder'} className='border-2 border-white text-white rounded-[5px] w-fit' />
                </div>
                <div className='w-1/2'>
                    <img src={SolutionImage} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Solutions
