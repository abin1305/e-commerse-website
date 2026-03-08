import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full md:w-[80%] mt-[50px] md:mt-[500px] h-auto md:h-[60vh] flex flex-col m-auto pl-0 pt-[10px] mb-[50px] md:mb-[150px] bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] px-4 md:px-0'>
        <div className='flex flex-col justify-center'>
            <h1 className='text-[#171717] text-2xl sm:text-4xl md:text-6xl font-medium pl-0 md:pl-[50px] text-center md:text-left'>Get Exclusive Offer on your Email</h1>
            <p className='text-[#171717] text-lg md:text-2xl font-light pl-0 md:pl-[100px] pt-[20px] md:pt-[40px] uppercase text-center md:text-left'>Subscribe to get special offers</p>
            <div className='flex flex-col md:flex-row gap-4 items-center md:items-start mt-[20px] md:mt-[30px] px-4 md:px-0'>
                <input type="text" placeholder='Enter your email' className='w-full md:w-[600px] h-[50px] border-[1px] border-[#fde1ff] rounded-3xl pl-4 md:pl-[100px] focus:outline-none'/>
                <button className='bg-[#ff4141] border-none font-semibold text-white px-6 py-2 md:py-3 md:ml-[-100px] rounded-4xl w-full md:w-[150px] h-[50px]'>subscribe</button>
            </div>
        </div>
        <div className='flex-1 flex text-center justify-end pt-[50px]'>

        </div>

    </div>
  )
}

export default Newsletter