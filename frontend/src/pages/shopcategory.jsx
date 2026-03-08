import React from 'react'
import Footer from '../components/Footer'
import { useContext } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import dropdown_icon from"../components/Assets/dropdown_icon.png"
import Item from '../components/Item'


const shopcategory = (props) => {
    const {all_product} = useContext(Shopcontext);
  return (
    <div className=''>
        <img className='block my-[20px] md:my-[30px] mx-auto w-[95%] md:w-[82%]' src={props.banner} alt="" />
        <div className='flex flex-col md:flex-row my-[0px] mx-4 md:mx-[170px] justify-between items-center gap-4'>
            <p className='font-semibold text-xs md:text-base'>
                <span className='font-semibold'>showing 1-12 of </span> out of 36 products
            </p>
            <div className='px-[20px] md:px-[30px] flex items-center gap-[10px] py-[10px] rounded-4xl border border-[#888] text-xs md:text-base'>
                sort by <img src={dropdown_icon} alt="" className='w-[20px] h-[20px]' />
            </div>
        </div>
        <div className='mx-4 md:mx-[20px] my-[30px] md:my-[50px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-[40px] md:gap-y-[80px] gap-x-[15px] md:gap-x-[20px]'>
           
                {all_product.map((item,i)=>{
                    if(props.category === item.category){
                        return<Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                    }
                    else{
                        return null;
                    }
                })}
           
                           
        </div>
        <div className='flex justify-center items-center mx-auto mb-[50px] mt-[30px] md:mt-[50px] w-[200px] md:w-[233px] h-[60px] md:h-[69px] rounded-[75px] bg-[#ededed] text-[#787878] text-lg md:text-2xl font-semibold'>
            Explore more
        </div>
        
    </div>
  )
}

export default shopcategory