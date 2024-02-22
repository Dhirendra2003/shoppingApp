/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import all_product from "../components/assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_product.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  // Retrieve cart state from local storage on component mount
  const storedCart = JSON.parse(localStorage.getItem('cartItems')) || getDefaultCart();
  const [cartItems, setCartItems] = useState(storedCart);
 
  // Update local storage whenever cart state changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
  };

  const removeFromCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
  };

  const totalCartItem=()=>{
    let totalNo=0;
    for(let i in cartItems){
      if(cartItems[i]>0){
        totalNo+=cartItems[i];
      }
    }
    //console.log(totalNo+"this is totla")
    return totalNo;
  }
 

  const contextValue = { totalCartItem,all_product, cartItems, addToCart, removeFromCart };
 

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );

    
};

export default ShopContextProvider;
