import React from 'react'
import remove_icon from './assets/cart_cross_icon.png'
import { useContext } from 'react';
import { Shopcontext } from '../context/Shopcontext';
const Cartitems = () => {
    const {all_product,cartitems,addtocart,removefromcart,removeitem,gettotalcartcount} = useContext(Shopcontext);
  return (
    <div className='my-[50px] md:my-[100px] mx-4 md:mx-[170px]'>
        <div className='grid grid-cols-3 md:grid-cols-6 items-center gap-[20px] md:gap-[75px] py-[20px] px-[0px] text-[#54545] text-xs md:text-[18px] font-semibold overflow-x-auto'>
            <p className='hidden md:block'>products</p>
            <p className='hidden md:block'>title</p>
            <p>price</p>
            <p className='text-center'>qty</p>
            <p className='hidden md:block'>total</p>
            <p className='hidden md:block'>remove</p>
        </div>
        <hr className='h-[3px] bg=[#e2e2e2] border-0' />
{all_product.map((e)=>{
    if(cartitems[e.id]>0){
        return(
            <div key={e.id}>
                <div className='grid grid-cols-3 md:grid-cols-6 items-center gap-[20px] md:gap-[75px] py-[20px] px-[0px] text-[#54545] text-xs md:text-[18px] font-semibold'>
                    <img src={e.image} alt="" className='w-[50px] h-[50px] md:w-[80px] md:h-[80px]' />
                    <p className='hidden md:block text-xs md:text-base'>{e.name}</p>
                    <p className='text-xs md:text-base'>${e.new_price}</p>
                    <div className='flex gap-1'>
                        <button className='w-[30px] h-[30px] md:w-[40px] md:h-[50px] border-2 border-[#ebebeb] bg-[#fff] text-xs md:text-base' onClick={() => addtocart(e.id)}>+</button>
                        <button className='w-[30px] h-[30px] md:w-[40px] md:h-[50px] text-xs md:text-base'>{cartitems[e.id]}</button>
                        <button className='w-[30px] h-[30px] md:w-[40px] md:h-[50px] border-2 border-[#ebebeb] bg-[#fff] text-xs md:text-base' onClick={() => removefromcart(e.id)}>-</button>
                    </div>
                    <p className='hidden md:block'>${e.new_price * cartitems[e.id]}</p>
                    <img src={remove_icon} onClick={() => removeitem(e.id)} alt="" className='w-[20px] h-[20px] cursor-pointer' />
                </div>
                <hr />
            </div>
        )
    }
    return null;
})}
<div className='flex flex-col md:flex-row my-[50px] md:my-[100px] mx-[0] gap-[30px]'>
    <div className='flex-1 flex flex-col gap-[30px] md:gap-[40px]'>
        <h1 className='text-lg md:text-2xl font-semibold'>cart totals</h1>
        <div className='text-sm md:text-base'>
            <div className='flex justify-between py-[15px] px-[0px]'>
                <p>subtotal</p>
                <p>${all_product.reduce((total, item) => total + (item.new_price * cartitems[item.id]), 0)}</p>
            </div>
            <hr />
            <div className='flex justify-between py-[15px] px-[0px]'>
                <p>shipping fee</p>
                <p>free</p>
            </div>
            <hr />
            <div className='flex justify-between py-[15px] px-[0px]'>
                <p className='font-semibold'>total</p>
                <h3 className='font-semibold'>${all_product.reduce((total, item) => total + (item.new_price * cartitems[item.id]), 0)}</h3>
            </div>
        </div>
        <button className='w-full md:w-[262px] h-[50px] md:h-[58px] outline-none border-none bg-[#ff5a5a] text-[#fff] text-sm md:text-[16px] font-semibold cursor-pointer rounded'>proceed to checkout</button>
    </div>
    <div className='flex-1 text-sm md:text-[16px] font-semibold'>
        <p className='text-[#555]'>if you have a coupon code, please enter it below</p>
        <div className='w-full md:w-[504px] mt-[15px] pl-[20px] h-[50px] bg-[#eaeaea] flex items-center gap-2 md:gap-0'>
            <input type="text" placeholder='promo code' className='border-none outline-none bg-transparent text-xs md:text-[16px] flex-1 md:w-[330px] h-[50px] pl-4 md:pl-0'/>
            <button className='w-full md:w-[153px] h-[50px] bg-[#ff5a5a] text-[#fff] text-xs md:text-[16px] font-semibold cursor-pointer rounded md:rounded-none'>submit</button>
        </div>
    </div>
</div>

    </div>
  )
}

export default Cartitems