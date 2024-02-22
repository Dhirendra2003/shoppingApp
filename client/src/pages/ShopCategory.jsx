/* eslint-disable react/prop-types */
//import React from 'react'
//import { useContext } from 'react';
import product_1 from "../components/assets/product_1.png";
import dropdown_icon from "../components/assets/dropdown_icon.png";
import all_product from "../components/assets/all_product";
import Item from "../components/item/Item";

//import { ShopContext } from '../context/ShopContext';

export default function ShopCategory(props) {
  // Assuming your context provides a property named 'all_products'
  //const { all_products } = useContext(ShopContext);

  // Assuming 'props' should be passed to the component
  return (
    <div className="shopcategory  mx-10">
      {/* Use a default value or make sure 'props.banner' is always provided */}
      <img src={props.banner || product_1} className="mx-[auto] my-10" />
      <div className="shopCategory-sort mx-[10vw]">
        <p className="flex float-left text-lg p-3 ">
          <span className="font-bold tracking-wide">Showing 1-12 </span> out of 36 products
        </p>
        <div className="btn bg-zinc-100 flex border-2  p-0 w-28 p-3 rounded-full float-right ">
          Sort by<img src={dropdown_icon} className="h-3 w-3 my-1 mx-2"></img>
        </div>
      </div>
      <div className="shop-products my-40 mx-[12vw]  grid grid-cols-4 ">
        {all_product.map((item, index) => {
          if (props.category === item.category) {
            return (
              <Item
                key={index}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
                
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <button className="flex m-[auto] my-10 text-xl p-4 rounded-full bg-zinc-200">Explore More</button>
    </div>
  );
}
