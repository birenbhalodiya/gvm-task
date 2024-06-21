import React from 'react'

const Input = ({ placeholder, className }) => {
    return (
        <div>
            <input type="text" placeholder={placeholder} className={`${className} px-4 py-[10px] text-sm font-medium rounded-[5px]`} />
        </div>
    )
}

export default Input