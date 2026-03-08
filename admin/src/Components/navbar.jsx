import React from 'react'
import navlogo from '../assets/nav-logo.svg'
import navprofile from '../assets/nav-profile.svg'  
const navbar = () => {
  return (
    <div className='flex items-center space-between py-[15px] px-[60px] justify-between shadow-[0 1px 3px -2px rgba(0,0,0,1)] mb-[1px] bg-white max-[900px]:px-[30px] max-[900px]:py-[15px]'>
        <img src={navlogo} alt="navlogo" className='w-[200px] max-[900px]:w-[150px] '/>
        <img src={navprofile} alt="navprofile" className='w-[75px] max-[900px]:w-[60px]' />
    </div>
  )
}

export default navbar