import React from 'react'
import logo from"./Assets/logo.png"
import cart_icon from"./Assets/cart_icon.png"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Shopcontext } from '../context/Shopcontext'




const navbar = () => {
const [menu,setMenu] = useState('shop')
const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
const {gettotalcartcount} = useContext(Shopcontext);


  return (
    <div className='navbar flex justify-between md:justify-around items-center p-2 md:p-4 shadow-[0_1px_3px_-2px_black]'>
      <div className="flex items-center gap-[5px] md:gap-[10px]">
        <img src={logo} alt="" className='w-[30px] md:w-[40px]' />
        <p className='text-[#171717] text-[20px] md:text-[38px] font-semibold'>shopper</p>
      </div>
      
      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center list-none gap-[30px] lg:gap-[50px] text-[#626262] text-sm lg:text-xl font-medium">
        <li onClick={()=>{setMenu('shop')}} className='flex flex-col items-center justify-center gap-[3px] cursor-pointer'  ><Link to="/">shop</Link> {menu==='shop'? <hr className='border-none w-[80%] h-[3px] rounded-xl bg-[#ff4141]' />:<></>}</li>
        <li onClick={()=>{setMenu('men')}} className='flex flex-col items-center justify-center gap-[3px] cursor-pointer'><Link to="/mens">mens</Link> {menu==='men'? <hr className='border-none w-[80%] h-[3px] rounded-xl bg-[#ff4141]' />:<></>} </li >
        <li onClick={()=>{setMenu('womens')}} className='flex flex-col items-center justify-center gap-[3px] cursor-pointer'><Link to="/womens">womens</Link>  {menu==='womens'? <hr className='border-none w-[80%] h-[3px] rounded-xl bg-[#ff4141]' />:<></>}</li >
        <li onClick={()=>{setMenu('kids')}} className='flex flex-col items-center justify-center gap-[3px] cursor-pointer'><Link to="/kids">kids</Link>  {menu==='kids'? <hr className='border-none w-[80%] h-[3px] rounded-xl bg-[#ff4141]' />:<></>}</li >
      </ul>

      {/* Mobile Menu Button */}
      <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className='md:hidden text-[#171717] text-xl'>
        ☰
      </button>
      
      <div className="flex items-center gap-[15px] md:gap-[30px] lg:gap-[45px]">
        <Link to="/login">  <button className='active:bg-[#f3f3f3] hidden md:block w-[100px] lg:w-[157px] h-[40px] lg:h-[58px] outline-none border border-[#7a7a7a] rounded-[75px] text-[#515151] text-xs lg:text-xl font-medium bg-white cursor-pointer'>login</button></Link>

        <div className="relative">
          <Link to="/cart"> <img className='w-[25px] h-[25px] md:w-[30px] md:h-[30px]' src={cart_icon} alt="" /></Link>
          <div className="absolute top-[-8px] right-[-8px] w-[20px] h-[20px] md:w-[22px] md:h-[22px] flex justify-center items-center bg-[#ff4141] rounded-full text-white text-xs md:text-sm">
            {gettotalcartcount()}
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <ul className='md:hidden absolute top-[60px] left-0 w-full bg-white shadow-lg flex flex-col list-none gap-[10px] text-[#626262] text-sm font-medium p-4'>
          <li onClick={()=>{setMenu('shop'); setMobileMenuOpen(false)}} className='cursor-pointer'><Link to="/">shop</Link></li>
          <li onClick={()=>{setMenu('men'); setMobileMenuOpen(false)}} className='cursor-pointer'><Link to="/mens">mens</Link></li>
          <li onClick={()=>{setMenu('womens'); setMobileMenuOpen(false)}} className='cursor-pointer'><Link to="/womens">womens</Link></li>
          <li onClick={()=>{setMenu('kids'); setMobileMenuOpen(false)}} className='cursor-pointer'><Link to="/kids">kids</Link></li>
          <li><Link to="/login" onClick={() => setMobileMenuOpen(false)}>login</Link></li>
        </ul>
      )}
        

    </div>
  )
}

export default navbar