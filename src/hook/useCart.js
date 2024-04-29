import { useEffect, useState } from "react"
//all the function should be in the hook 

 export const useCart=()=>{

const[cartItem,setCartItem]=useState([]);
//when my cartItem variable will be changed//since cartitem is object you should change it to string

useEffect(()=>{
  const data = localStorage.getItem("Maryam-cart")
  setCartItem(!!JSON.parse(data) ? JSON.parse(data) : [])
}
,[])
useEffect(()=>{
  if( cartItem !== undefined)
  localStorage.setItem("Maryam-cart" , JSON.stringify(cartItem))
},[cartItem])

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
    // i returned in case will be in the access if we want to use them
     const resetCart=()=>{
     
        setCartItem([]);
        localStorage.removeItem("Maryam-cart");

     }
return{addToCart,removeFromCart,cartItem,resetCart}



}
