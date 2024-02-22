//import React from 'react'
import Item from '../item/Item';
import data_product from './../assets/data';

export default function RelatedProducts() {
  return (
    <div className='related'>
      <h1 className='m-[auto] p-10'>Related Products:</h1>
      <div className="item flex m-10 m-[auto] px-40">
        {data_product.map((item,i)=>{
          return <Item key={i} id={item.id} name={item.name} 
          image={item.image} new_price={item.new_price} old_price={item.old_price}/> 
        })}
      </div>
    </div>
  )
}
