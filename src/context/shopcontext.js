import { createContext } from "react";
import { useCart } from "../hook/useCart";


 export const ShopConext=createContext({
cartItem:null,
addToCart:()=>{},
removeFromCart:()=>{},
resetCart:()=>{}

})
export  const ShopConextProvider=(props)=>{
  //combining hook with context  so we conneced them by writing 
  return<ShopConext.Provider value={useCart()}>
    {props.children}
  </ShopConext.Provider>
}