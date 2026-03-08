import React from 'react'
import cross_icon from "../assets/cross_icon.png"
import { useState, useEffect } from 'react';
const Listproduct = () => {
  const [allproducts, setAllproducts] = useState([]);
  const fetchinfo = async () => {
    await fetch("http://localhost:4000/allproducts").then((res) => res.json())
      .then((data) => {
        setAllproducts(data);
      })
  }
  useEffect(() => {
    fetchinfo();
  }, [])

  const remove_product = async (id) => {
    const response = await fetch('http://localhost:4000/remove', {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    const data = await response.json();
    if (data.success) {
      alert("product removed successfully");
      await fetchinfo();
    } else {
      alert("something went wrong");
    }
  }
  return (
    <div className='flex flex-col items-center w-[100%] h-[740px] py-[10px] px-[50px] m-[30px] rounded-2xl bg-white'>
      <h1 className='font-semibold text-[30px]'>All product list</h1>
      <div className='grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] gap-[10px] w-[100%] py-[20px] px-[0px] text-[#54545] text-[15px] font-semibold'>
        <p>products</p>
        <p>title</p>
        <p>old price</p>
        <p>new price</p>
        <p>category</p>
        <p>actions</p>
      </div>
      <div className='w-full overflow-y-auto'>
        {allproducts.map((product,index)=>{
          return(
            <React.Fragment key={product.id}>
              <hr />
              <div className='grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] gap-[10px] w-[100%] py-[15px] px-[0px] text-[#54545] text-[15px] font-medium items-center'>
                <img src={product.image} alt={product.name} className='h-[80px]'/>
                <p>{product.name}</p>
                <p>${product.old_price}</p>
                <p>${product.new_price}</p>
                <p>{product.category}</p>
                <img onClick={()=>{remove_product(product.id)}} src={cross_icon} alt="delete" className='cursor-pointer mx-auto' />
              </div>
            </React.Fragment>
          )
        })}
      </div>
        
    </div>
  )
}

export default Listproduct