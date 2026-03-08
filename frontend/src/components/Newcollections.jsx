import React from 'react'
import Item from './Item'
import new_collections from './Assets/new_collections.js'
const Newcollections = () => {
  return (
 
    <div className='flex flex-col items-center gap-[10px] h-auto md:h-[90vh] py-[40px] md:py-0 px-4'>
        <h1 className='text-[#171717] text-2xl sm:text-3xl md:text-5xl font-semibold text-center'>NEW COLLECTION</h1>
        <hr className='w-[150px] md:w-[200px] h-[6px] rounded-xl bg-[#252525]' />
        <div className='mt-[30px] md:mt-[50px] flex gap-[15px] md:gap-[30px] flex-wrap justify-center'>
            {new_collections.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                
            })}
        </div>

    </div>
  )
}

export default Newcollections