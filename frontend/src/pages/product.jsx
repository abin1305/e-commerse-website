import React from 'react'
import Breadcrum from '../components/Breadcrum';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { Shopcontext } from '../context/Shopcontext';
import Productdisplay from '../components/Productdisplay';
import Descriptionbox from '../components/Descriptionbox';
import Relatedproducts from '../components/Relatedproducts';
const product = () => {
  const {all_product} = useContext(Shopcontext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product}/>
      <Productdisplay product={product}/>
      <Descriptionbox />
      <Relatedproducts />

        
       
    </div>
  )
}

export default product