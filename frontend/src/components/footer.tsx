import React from 'react'
import logo from"./Assets/logo.png"
import instagram from"./Assets/instagram_icon.png"
import pintester from"./Assets/pintester_icon.png"
import whatsapp from"./Assets/whatsapp_icon.png"

const footer = () => {
  return (
    <div className='flex flex-col items-center px-4'>
        <div className='flex text-xl md:text-2xl gap-[10px] md:gap-[20px] text-center justify-center font-light'>
            <img src={logo} alt="" className='w-[50px] h-[50px] md:w-[40px] md:h-[40px]' />
            <h1 className='pt-[5px] md:pt-[20px] text-3xl md:text-5xl'>SHOPPER</h1>
        </div>
        <div className='flex flex-wrap gap-[20px] md:gap-[40px] text-sm md:text-lg mt-6 md:mt-10 mb-4 font-medium justify-center'>
            <p>company</p>
            <p>products</p>
            <p>offers</p>
            <p>about</p>
            <p>contact</p>
        </div>
        <div className='flex gap-[20px] md:gap-[40px] text-lg mt-6 md:mt-10 mb-6 md:mb-10'>
            <img src={instagram} alt="" className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] cursor-pointer hover:opacity-80' />
            <img src={pintester} alt="" className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] cursor-pointer hover:opacity-80' />
            <img src={whatsapp} alt="" className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] cursor-pointer hover:opacity-80' />
        </div>
        <hr className='w-full md:w-[80%] h-[1px] rounded-xl bg-[#252525]'/>
        <p className='mt-4 md:mt-5 mb-4 md:mb-5 text-center text-xs md:text-base'>© 2024 SHOPPER. All rights reserved.</p>
    </div>
  )
}

export default footer