//import React from 'react'
import { Link } from "react-router-dom";
import add_productIcon from "../assets/Product_Cart.svg";
import list_product_icon from "../assets/Product_list_icon.svg";


export default function Sidebar() {
  return (
    <div className="sidebar bg-zinc-600 text-white  w-[15vw] mr-[auto] rounded-r-xl h-screen fixed  ">
      <Link to={"/addproduct"}>
        <div className="item flex p-3 m-3 my-5 rounded-xl bg-zinc-800 hover:bg-orange-500 hover:text-black">
          <img src={add_productIcon} className="m-2" />
          <p className="font-bold my-[auto] ">Add Product</p>
        </div>
      </Link>
      <Link to={"/listproduct"}>
        <div className="item flex p-3 m-3 my-5 rounded-xl bg-zinc-800 hover:bg-orange-500 hover:text-black">
          <img src={list_product_icon} className="m-2" />
          <p className="font-bold my-[auto] ">Product List</p>
        </div>
      </Link>
    </div>
  );
}
