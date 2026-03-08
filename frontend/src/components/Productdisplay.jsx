import React, { use } from 'react'
import star_icon from './assets/star_icon.png'
import star_dull_icon from './assets/star_dull_icon.png'
import { useContext } from 'react'
import { Shopcontext } from '../context/Shopcontext'
const Productdisplay = (props) => {
    const {product} = props;
    const {addtocart} = useContext(Shopcontext);
  return (
    <div className='flex flex-col md:flex-row my-0 mx-4 md:mx-[100px] gap-6 md:gap-0 py-6 md:py-0'>
        <div className='flex flex-col md:flex-row gap-[10px] md:gap-[17px] flex-1'>
            <div className='flex flex-row md:flex-col gap-[10px] md:gap-[16px] order-2 md:order-1'>
                <img className='h-[80px] w-[80px] md:h-[160px] md:w-[400px] cursor-pointer' src={product.image} alt="" />
                <img className='h-[80px] w-[80px] md:h-[160px] md:w-[400px] cursor-pointer' src={product.image} alt="" />
                <img className='h-[80px] w-[80px] md:h-[160px] md:w-[400px] hidden md:block cursor-pointer' src={product.image} alt="" />
                <img className='h-[80px] w-[80px] md:h-[160px] md:w-[400px] hidden md:block cursor-pointer' src={product.image} alt="" />
            </div>
            <div className='order-1 md:order-2'>
                <img className='w-full md:w-[1500px] h-[300px] md:h-[700px]' src={product.image} alt="" />
            </div>
        </div>
        <div className='flex flex-col my-0 mx-0 md:mx-[70px] flex-1'>
            <h1 className='text-[#3d3d3d] text-xl md:text-[25px] font-semibold'>{product.name}</h1>
            <div className='flex items-center gap-[5px] text-[#1c1c1c] text-sm md:text-[16px] my-2'>
                <img src={star_icon} alt="" className='w-[16px] h-[16px] md:w-auto md:h-auto' />
                <img src={star_icon} alt="" className='w-[16px] h-[16px] md:w-auto md:h-auto' />
                <img src={star_icon} alt="" className='w-[16px] h-[16px] md:w-auto md:h-auto' />
                <img src={star_icon} alt="" className='w-[16px] h-[16px] md:w-auto md:h-auto' />
                <img src={star_dull_icon} alt="" className='w-[16px] h-[16px] md:w-auto md:h-auto' />
                <p>(122)</p>
            </div>
            <div className='flex my-[20px] md:my-[40px] mx-0 gap-[20px] md:gap-[30px] text-lg md:text-[24px] font-bold'>
                <div className='text-[#818181] line-through'>${product.old_price}</div>
                <div className='text-[#ff4141]'>${product.new_price}</div>
            </div>
            <div className='text-[#656565] text-xs md:text-[16px] mt-0 mb-[20px] md:mb-[40px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum accusamus excepturi explicabo, et aliquam laboriosam doloribus? Alias, quibusdam natus 
            </div>
            <div>
                <h1 className='mt-[15px] md:mt-[30px] text-[#656565] text-sm md:text-[20px] font-semibold'>Select Size</h1>
                <div className='flex my-[15px] md:my-[30px] mx-0 gap-[10px] md:gap-[20px] flex-wrap'>
                    <div className='py-[12px] md:py-[18px] px-[16px] md:px-[24px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer text-xs md:text-base'>S</div>
                    <div className='py-[12px] md:py-[18px] px-[16px] md:px-[24px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer text-xs md:text-base'>M</div>
                    <div className='py-[12px] md:py-[18px] px-[16px] md:px-[24px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer text-xs md:text-base'>L</div>
                    <div className='py-[12px] md:py-[18px] px-[16px] md:px-[24px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer text-xs md:text-base'>XL</div>
                    <div className='py-[12px] md:py-[18px] px-[16px] md:px-[24px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer text-xs md:text-base'>XXL</div>
                </div>
            </div>
            <button onClick={()=>addtocart(product.id)} className='py-[15px] md:py-[20px] px-[30px] md:px-[40px] w-full md:w-[200px] text-xs md:text-[16px] font-semibold text-white bg-[#ff4141] mb-[20px] md:mb-[40px] border-none outline-none cursor-pointer rounded'>ADD TO CART</button>
            <p className='mt-[10px] text-xs md:text-base'><span className='font-semibold'>Category :</span>Women, T-Shirt, Crop Top</p>
            <p className='mt-[10px] text-xs md:text-base'><span className='font-semibold'>Tags :</span>Modern, Latest</p>
        </div>
    </div>
  )
}

export default Productdisplay