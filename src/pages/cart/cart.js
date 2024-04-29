import React, { useContext } from "react";
import { PRODUCTS } from "../../data/products";
import { ShopConext } from "../../context/shopcontext";
import Product from "../shop/product";


const Cart=()=>{
    const {cartItem,resetCart}=useContext(ShopConext);

    const totalPrice = cartItem.reduce((total, item) => {
      const product = PRODUCTS.find((p) => p.id === item.id);
      return total + product.price * item.count;
    }, 0);
  
    return(
        
        <React.Fragment>
       
      <h1 >
        shopping cart
      </h1>
     
        <hr/>
        <div className="row">
            {PRODUCTS.map((p)=>{
                if(cartItem?.some((i)=> i.id===p.id && i.count >0))
                 return <Product key={p.id} data={p} ></Product>
            })}
        </div>

        <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title">Total Price:</h5>
        
          <h3 className="card-text">${totalPrice}</h3>
        </div>
      </div>


        <button className="btn btn-secondary btn-lg btn-block" onClick={resetCart}  >reset</button>

       
        </React.Fragment>
    )

}
    
    
    export default Cart;