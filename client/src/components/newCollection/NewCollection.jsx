//import React from 'react'
import new_collections from './../assets/new_collections';
import Item from '../item/Item';

export default function NewCollection() {
  return (
    <div className='new-collections '>
      <h1 className='p-10 m-[auto] text-[2.5em] underline underline-offset-8 text-center font-bold text-purple-900'>NEW COLLECTIONS</h1>
      <div className="collections grid grid-cols-4 text-[1em] place-content-center w-[80%] m-[auto] p-20 pt-0">
        {new_collections.map((item,index)=>{
          return <Item  key={index} id={item.id} name={item.name} 
          image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}
