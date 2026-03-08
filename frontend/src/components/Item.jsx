import React from 'react'
import { Link } from 'react-router-dom';
const Item = (props) => {
  return (
    <div className='w-[150px] sm:w-[180px] md:w-[220px] lg:w-[250px] hover:scale-[1.05] transition duration-[600ms]'>
       <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" className='w-full h-auto'/></Link> 
        <p className='my-[6px] mx-0 text-xs md:text-sm'>{props.name}</p>
        <div className='flex gap-[10px] md:gap-[20px]'>
            <div className='text-[#374151] text-sm md:text-lg font-semibold'>
                ${props.new_price}
            </div>
            <div className='text-[#8c8c8c] text-sm md:text-lg font-medium line-through'>
                {props.old_price}
            </div>

           
        </div>

    </div>
  )
}

export default Item