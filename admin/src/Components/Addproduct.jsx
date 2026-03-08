import React from 'react';
import upload_area from "../assets/upload_area.svg"
import { useState } from 'react';
const Addproduct = () => {
    const [image,setimage]=useState(false)
    const[productdetails,setproductdetails]=useState({
        name:"",
        old_price:"",
        new_price:"",
        category:"women",
        image:""
    })
    const imagehandler =(e)=>{
        setimage(e.target.files[0])
    }

    const changehandler=(e)=>{
        setproductdetails({...productdetails,[e.target.name]:e.target.value})
    }

    const add_product=async()=>{
        console.log(productdetails)
        let responsedata;
        let product=productdetails;
        let formData=new FormData();
        formData.append("product",image);

        await fetch("http://localhost:4000/upload",{
            method:"POST",
            headers:{
                accept:"application/json",
            },
            body:formData   
            }
        ).then((res)=>res.json()).then((data)=>{
            responsedata=data;
        })
        if(responsedata.success){
            product.image=responsedata.image_url;
            console.log(product)

            await fetch('http://localhost:4000/addproduct',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(product),
            }).then((resp)=>resp.json()).then((data)=>{
                data.success?alert("Product Added"):alert("Failed")
            })
        }



    }
  return (
    <div className="flex flex-col flex-1 box-border p-8 m-8 rounded-md bg-white max-[800px]:p-4 max-[800px]:m-4">
      <div className="mb-4">
        <p className="font-semibold text-gray-700">Product title</p>
        <input
        value={productdetails.name}
        onChange={changehandler}

          className="box-border w-full h-12 rounded-md pl-4 mt-2 border border-gray-300 outline-none text-gray-600 text-sm"
          type="text"
          name="name"
          placeholder="Type here"
        />
      </div>
      <div className="flex gap-10 mb-4">
        <div className="w-full">
          <p className="font-semibold text-gray-700">Price</p>
          <input
            value={productdetails.old_price}
            onChange={changehandler}

            className="box-border w-full h-12 rounded-md pl-4 mt-2 border border-gray-300 outline-none text-gray-600 text-sm"
            type="text"
            name="old_price"
            placeholder="Old Price"
          />
        </div>
        <div className="w-full">
          <p className="font-semibold text-gray-700">Offer Price</p>
          <input
            value={productdetails.new_price}
            onChange={changehandler}

            className="box-border w-full h-12 rounded-md pl-4 mt-2 border border-gray-300 outline-none text-gray-600 text-sm"
            type="text"
            name="new_price"
            placeholder="New Price"
          />
        </div>
      </div>
      <div className="mb-4">
        <p className="font-semibold text-gray-700">Product Category</p>
        <select value={productdetails.category} onChange={changehandler} name="category" className="p-3 mt-2 rounded-md w-32 text-sm border border-gray-300 bg-white">
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kid">Kid</option>
        </select>
      </div>
      <div className='mb-4'>
        <label htmlFor="file-input">
            <img src={image?URL.createObjectURL(image):upload_area} alt="" className='w-[130px] mt-4'/>
        </label>
        <input onChange={imagehandler} type="file" name='image' id='file-input' className='mt-2' hidden/>
      </div>
      <button onClick={()=>{add_product()}} className='mt-5 w-40 h-12 rounded-md bg-blue-500 text-white font-semibold cursor-pointer hover:bg-blue-600'>ADD</button>
    </div>
  );
};

export default Addproduct;