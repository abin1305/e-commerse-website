import React from 'react'
import arrow_icon from './assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='flex gap-[8px] items-center text-[#5e5e5e] text-xs md:text-[16px] font-medium my-[20px] md:my-[30px] mx-4 md:mx-[100px] capitalize overflow-x-auto'>
        HOME <img src={arrow_icon} alt="" className='w-[16px] h-[16px] md:w-auto md:h-auto' /> shop <img src={arrow_icon} alt="" className='w-[16px] h-[16px] md:w-auto md:h-auto' /> {product.category} <img src={arrow_icon} alt="" className='w-[16px] h-[16px] md:w-auto md:h-auto' /> {product.name}

    </div>
  )
}

export default Breadcrum