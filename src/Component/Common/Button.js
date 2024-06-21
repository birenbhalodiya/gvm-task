import React from 'react'

const Button = ({ className, buttonName }) => {
    return (
        <div className={`${className} px-5 py-[10px] text-sm font-medium rounded-[5px]`}>
            {buttonName}
        </div>
    )
}

export default Button
