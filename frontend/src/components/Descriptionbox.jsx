import React from 'react'

const Descriptionbox = () => {
  return (
    <div className='my-[60px] md:my-[120px] mx-4 md:mx-[170px]'>
        <div className='flex flex-col sm:flex-row'>
            <div className='flex items-center justify-center text-xs md:text-[16px] font-semibold w-full sm:w-[171px] h-[50px] sm:h-[70px] border border-[#d0d0d0]'>Description</div>
            <div className='flex items-center justify-center text-xs md:text-[16px] font-semibold w-full sm:w-[171px] h-[50px] sm:h-[70px] border border-[#d0d0d0] bg-[#FBFBFB] text-[#555]'>Reviews(122)</div>
        </div>
        <div className='flex flex-col gap-[15px] md:gap-[25px] border border-[#D0D0D0] p-4 md:p-[50px] pb-[40px] md:pb-[70px]'>
            <p className='text-xs md:text-base leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus totam quae nostrum ex eveniet distinctio hic nam, rerum natus laudantium, qui iste beatae porro nihil, itaque mollitia veniam aperiam aut!</p>
            <p className='text-xs md:text-base leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus totam quae nostrum ex eveniet distinctio hic nam, rerum natus laudantium, qui iste beatae porro nihil, itaque mollitia veniam aperiam aut!</p>
        </div>

    </div>
  )
}

export default Descriptionbox