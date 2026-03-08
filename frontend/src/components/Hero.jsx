import React from 'react'
import hand_icon from "./Assets/hand_icon.png"
import arrow_icon from "./Assets/arrow.png"
import heroimage from "./Assets/hero_image.png"



const Hero = () => {
  return (
    <div className='bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] h-auto md:h-[100vh] flex flex-col md:flex-row ml-0 md:ml-[-80px]'>
        <div className='flex-1 flex flex-col justify-center gap-[10px] md:gap-[20px] p-4 md:pl-[180px] leading-[1.1]'>
            <h2 className='text-black text-xs md:text-lg font-semibold'>NEW ARRIVALS ONLY</h2>
            <div className=''>
                <div className='flex text-center gap-[5px] md:gap-[10px]'>
                    <p className='text-2xl md:text-6xl font-semibold'>new</p>
                    <img src={hand_icon} alt="" className='w-[40px] md:w-[80px]'/>
                </div>
                <p className='text-2xl md:text-6xl font-semibold'>collections</p>
                <p className='text-2xl md:text-6xl font-semibold'>for you</p>

            </div>
            <div className='flex items-center gap-[10px] md:gap-[15px] justify-center w-[280px] md:w-[310px] h-[40px] md:h-[50px] bg-[#ff4141] rounded-[75px] text-white text-sm md:text-base mt-[20px] md:mt-[30px] cursor-pointer'>

                <div>latest collections</div>
                <img src={arrow_icon} alt="" className='w-[15px] md:w-[20px]' />

            </div>

        </div>
        <div className='flex-1 flex justify-center md:justify-end pt-[20px] md:pt-0'>
          <img src={heroimage} alt="" className='w-[300px] h-[300px] md:w-[500px] md:h-[550px]' />
        </div>
    </div>
  )
}

export default Hero