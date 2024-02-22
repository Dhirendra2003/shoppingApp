// eslint-disable-next-line no-unused-vars
import React from "react";
import logo from "./assets/logo.png";
import cart_icon from "./assets/cart_icon.png";
import { useContext, useState } from "react";
import { NavLink ,Link} from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

export default function Navbar() {
  const [shop, setShop] = useState("Shop");
  const { totalCartItem} = useContext(ShopContext);
  
  return (
    <div className="flex text-white top-0 left-0  h-20 bg-zinc-900 p-3">
      <div className="flex nav-logo  ">
        <img src={logo} className="p-1" />
        <p className="font-bold bold bg-purple-700 text-lg center p-3 rounded">
          SHOPPERS {shop}
        </p>
      </div>
      <ul className="flex  m-[auto] ">
        <li className="p-5 hover:underline hover:underline-offset-8 hover:font-semibold hover:text-orange-500 hover:cursor-pointer hover:bg-zinc-800 hover:rounded">
          <NavLink
            onClick={() => {
              setShop("shop");
            }}
            to="/shop"
          >
            Shop
          </NavLink>
        </li>
        <li className="p-5 hover:underline hover:underline-offset-8 hover:font-semibold hover:text-orange-500 hover:cursor-pointer hover:bg-zinc-800 hover:rounded">
          <NavLink
            onClick={() => {
              setShop("men");
            }}
            to="/men"
          >
            Men
          </NavLink>
        </li>
        <li className="p-5 hover:underline hover:underline-offset-8 hover:font-semibold hover:text-orange-500 hover:cursor-pointer hover:bg-zinc-800 hover:rounded">
          <NavLink 
           onClick={() => {
            setShop("Women");
          }}
          to="/women">Women</NavLink>
        </li>
        <li className="p-5 hover:underline hover:underline-offset-8 hover:font-semibold hover:text-orange-500 hover:cursor-pointer hover:bg-zinc-800 hover:rounded">
          <NavLink 
           onClick={() => {
            setShop("kids");
          }}
          to="/kids">Kids</NavLink>
        </li>
      </ul>
      <div className="cart flex ">
        <button className="mx-2 hover:underline hover:underline-offset-8 hover:font-semibold hover:text-orange-500 hover:cursor-pointer hover:bg-zinc-800 hover:rounded mr-8 px-4 border-2 rounded-full">
          <NavLink to="/login">Sign in</NavLink>
        </button>
        <Link 
           onClick={() => {
            setShop("cart");
          }}
          to="/cart"><div className="flex">
        <img src={cart_icon} className="w-12 h-12 invert  my-1" />
        <p className="relative right-8 my-1 h-6 w-6 text-center namecount font-bold text-orange-400 text-m p-1 bg-zinc-900 rounded-lg">
          {totalCartItem()}
        </p>
        </div>
        </Link>
      </div>
    </div>
  );
}
