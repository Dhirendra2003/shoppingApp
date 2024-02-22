//import React from "react";
import exc_image from "../assets/exclusive_image.png";

export default function Offers() {
  return (
    <div className="offers flex flex-wrap m-20 py-10 px-36 h-98 bg-yellow-300/50  text-[4em] font-bold text-purple-900 tracking-tight leading-tight rounded-[60px]">
      <div className="offer-left  m-[auto]">
        <h1>Exclusive</h1>
        <h1>Offers For You </h1>
        <p className="font-semibold text-[0.5em]">ONLY ON BEST SELLING PRODUCTS</p>
        <button className="flex bg-red-500 text-white rounded-full p-5 text-[0.4em] px-8 my-8">Check NOW</button>
      </div>
      
        <img src={exc_image}className="offer-right  ml-[auto] right-20 bg-gradient-to-b  from-yellow-100/0 to-white rounded-[30px] px-5 "/>
      
    </div>
  );
}
