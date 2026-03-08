import React,{createContext} from 'react'
import all_product from '../components/Assets/all_product'
import { useState } from 'react'
import { useEffect } from 'react'
export const Shopcontext = createContext(null);
    const getdefaultcard=()=>{
        let cart={};
        for(let i=0;i<all_product.length+1;i++){
            cart[i]=0;
        }
        return cart;
    };

const Shopcontextprovider = (props)=>{
        const [cartitems,setcartitems]=useState(getdefaultcard());

    const addtocart=(itemId)=>{
        setcartitems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        console.log(cartitems);
    }
    const removefromcart=(itemId)=>{
        setcartitems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    }

    const removeitem=(itemId)=>{
        setcartitems((prev)=>({...prev,[itemId]:0}));
    }
    const gettotalcartcount=()=>{
        let totalcount=0;
        for(const item in cartitems){
            totalcount+=cartitems[item];
        }
        return totalcount;
    }

    const contextvalue={all_product,cartitems,addtocart,removefromcart,removeitem, gettotalcartcount};

    return(
        <Shopcontext.Provider value={contextvalue}>
            {props.children}
        </Shopcontext.Provider>
    )
}

export default Shopcontextprovider;