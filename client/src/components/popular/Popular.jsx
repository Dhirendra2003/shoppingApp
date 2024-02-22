//import React from 'react'
import data_product from './../assets/data';
import Item from '../item/Item';

export default function Popular() {
  return (
    <div className='popular '>
      <h1 className='p-10 m-[auto] text-[2.5em] underline underline-offset-8 text-center font-bold text-purple-900'>-POPULAR IN WOMEN-</h1>
      <div className="popular-item  flex text-[1em] place-content-center w-[80%] m-[auto]">
        {data_product.map((item,index)=>{
          return <Item key={index} id={item.id} name={item.name} 
          image={item.image} new_price={item.new_price} old_price={item.old_price} />

        })}
      </div>
    </div>
  )
}
