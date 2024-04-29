
import { createContext, useState } from "react";

export const ShopConext=createContext(null);
export const ShopConextProvider=({children})=>{
const [cartItem,setCartItem]=useState([]);


const addToCart = (itemId) => {
  const itemIndex = cartItem.findIndex((item) => item.id === itemId);

  if (itemIndex === -1) {
    setCartItem([...cartItem, { id: itemId, count: 1 }]);
  } else {
    const updatedCart = [...cartItem];
    updatedCart[itemIndex].count += 1;
    setCartItem(updatedCart);
  }
};

const removeFromCart = (itemId) => {

    setCartItem((prevItems) =>
      prevItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, count: item.count===0 ? 0 : item.count - 1 };
        }
        return item;
      })
    );
  };
const contextValue={cartItem,addToCart,removeFromCart};
return <ShopConext.Provider value={contextValue}> {children}</ShopConext.Provider>
}