import React from 'react'
import { Link } from 'react-router-dom'
import add_product_icon from "../assets/Product_Cart.svg"
import list_product_icon from "../assets/Product_list_icon.svg"
const Sidebar = () => {
  return (
    <div className='flex flex-col pt-[30px] gap-[20px] w-[100%] max-w-3xs h-[100vh] bg-white  max-[900px]:px-[30px] max-[800px]:py-[0px] max-[800px]:flex-row max-[800px]:max-w-none max-[800px]:h-auto'>
        <Link to={'/addproduct'} style={{textDecoration:"none"}}>
        <div className='flex items-center justify-center my-0 mx-[20px] py-[10px] px-[10px] rounded-xl bg-[#f6f6f6] gap-[20px] cursor-pointer max-[800px]:my-[20px]'>
            <img src={add_product_icon} alt="" />
            <p>Add Product</p>
        </div>
        </Link>
         <Link to={'/listproduct'} style={{textDecoration:"none"}}>
        <div className='flex items-center justify-center my-0 mx-[20px] py-[10px] px-[10px] rounded-xl bg-[#f6f6f6] gap-[20px] cursor-pointer   max-[800px]:my-[20px]'>
            <img src={list_product_icon} alt="" />
            <p>Product list</p>
        </div>
        </Link>


    </div>
  )
}

export default Sidebar