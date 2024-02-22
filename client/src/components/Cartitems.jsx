//import React from 'react'
import { useContext } from "react";
import all_product from "./assets/all_product";
import { ShopContext } from "../context/ShopContext";
import remove_icon from "./assets/cart_cross_icon.png";
//import Item from './item/Item';

export default function Cartitems() {
  const { cartItems ,totalCartItem ,removeFromCart} = useContext(ShopContext);
  console.log("this is from cartItems")
  console.log(cartItems )
  totalCartItem();
  var counter=0;
  var totalCartval=0;
  return (<>
    <table className=" m-[auto] my-[30px] border-collapse " >
      <tbody>
     <tr className="p-30">
  <th  className="p-2 " >Products</th>
  <th  className="p-2 " >Title</th>
  <th className="p-2 " >Price</th>
  <th className="p-2 " >Quantity</th>
  <th className="p-2 " >Total</th>
  <th  className="p-2 " >Remove</th>
</tr>
      
      {Object.keys(cartItems).map((itemID, i) => {
        const quantity = cartItems[itemID];
        const pid = all_product.find(
          (object) => object.id === Number(i)
        );
        
        if (quantity > 0) {

           counter+=1;
           
           totalCartval+=((pid.new_price) * quantity);
          return (
            <tr key={i} className=" shadow-lg rounded-lg m-15" >
        <td><img src={pid.image} alt={pid.name} className="h-40 shadow-md rounded-lg m-10"/></td>
        <td className="p-12 ">{pid.name}</td>
        <td className="p-12 ">${pid.new_price}</td>
        <td className="p-12 ">{quantity}</td>
        <td className="p-12 underline"> total: {(pid.new_price) * quantity}.00$</td>
        <td className="p-12 "><button onClick={()=>removeFromCart(pid.id)}><img src={remove_icon}  alt="Remove" /></button></td>
      </tr>
           
          ); 
        } return null ;
         }  ) }
         
      
         </tbody>
    </table>
    {counter === 0 && (
        <p key="a">Theres nothing in the cart.</p>       
      )}
    <div className="place-content-center grid">
    <p className="text-center text-xl">cart total :${totalCartval}.00</p>
    <button className="flex bg-red-500 text-white rounded-full p-5 text-[1.2em] px-8 my-3  ">Proceed to payment</button>
    </div></>
  );
}
