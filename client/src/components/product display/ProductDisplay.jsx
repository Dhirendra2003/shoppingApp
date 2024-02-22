/* eslint-disable react/prop-types */
//import React from 'react';
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import all_product from "../assets/all_product";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

export default function ProductDisplay(props) {
  const {addToCart}=useContext(ShopContext);
  const pid = all_product.find(
    (object) => object.id === Number(props.productId)
  ); //Number(props));
  //console.log(all_product);
  //console.log(pid);
  return (
    <div className="display flex flex-wrap">
      <div className="left flex w-[50vw] min-w-[500px] m-12">
        <div className="imglist w-20 intpad">
          <img src={pid.image}  />
          <img src={pid.image}  />
          <img src={pid.image}  />
          <img src={pid.image}  />
        </div>
        <div>
          <img src={pid.image} className="main w-96 mx-3" />
        </div>
      </div>
      <div className="rightsection w-[40vw] min-w-[400px] m-[auto] px-10">
        <div className="my-10  h-6">
          <h1 className="font-bold text-xl">{pid.name}</h1>
          <div className="stars flex h-6">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p className="text-lg ">(122)</p>
          </div>
        </div>
        <div className="cart">
          <p className="category underline ">
            Category: {pid.category + " > " + pid.name}
          </p>
        </div>
        <div className="prices flex m-10 ">
          <h1 className="mx-3 newprice font-bold text-[1.5em]">
            ${pid.new_price}
          </h1>
          <strike className="mx-3 oldprice text-zinc-400 my-2">
            {pid.old_price}
          </strike>
        </div>
        <button onClick={()=>{addToCart(pid.id)}} className="flex bg-red-500 text-white rounded-full p-3 text-[1.2em] px-4 mx-8 ">Add to cart</button>
        <div className="desc my-5">
          <p>
            A cloth is a flexible and woven material typically made from natural
            or synthetic fibers. It is used for various purposes, including
            clothing, upholstery, and accessories. Clothes provide protection,
            comfort, and style, reflecting cultural and personal preferences in
            design and color.
          </p>
        </div>
        <div className="size  p-5">
          <label htmlFor="cars" className="font-bold" >Select Size : </label>

          <select name="cars" id="cars" required className="border-2 rounded-lg p-2">
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
      </div>
    </div>
  );
}
