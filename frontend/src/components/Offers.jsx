import React from 'react'
import exclusive_image from "./Assets/exclusive_image.png"
const Offers = () => {
  return (
    <div className='w-full md:w-[80%] mt-[30px] md:mt-[50px] h-auto md:h-[60vh] flex flex-col md:flex-row m-auto pl-0 pt-[10px] mb-[50px] md:mb-[150px] bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] px-4 md:px-0'>
        <div className='flex flex-col flex-1 justify-center'>
            <h1 className='text-[#171717] text-3xl md:text-6xl font-semibold pl-0 md:pl-[100px] pt-[20px] md:pt-[30px]'>Executive</h1>
            <h1 className='text-[#171717] text-3xl md:text-6xl font-semibold pl-0 md:pl-[100px] pt-[10px] md:pt-[20px]'>offers for you</h1>
            <p className='text-[#171717] text-lg md:text-3xl font-semibold pl-0 md:pl-[100px] pt-[15px] md:pt-[20px] uppercase'>Special Offer for limited time</p>
            <button className='bg-[#ff4141] border-none font-semibold text-white px-4 md:px-6 py-2 md:py-3 ml-0 md:ml-[100px] mt-[15px] md:mt-[20px] rounded-4xl w-[220px] md:w-[260px] h-[50px] md:h-[60px]'>shop now</button>
        </div>
        <div className='flex-1 flex text-center justify-center md:justify-end pt-[20px] md:pt-[50px]'>
            <img src={exclusive_image} alt="" className='w-[200px] h-[200px] md:w-auto md:h-auto' />
        </div>

    </div>
  )
}

export default Offers