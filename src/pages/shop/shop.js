import React from "react";
import Product from "./product";
import { PRODUCTS } from "../../data/products";
const Shop = () => {
  return (
   
    <React.Fragment>
     
    <div className="row">
        <h2>shop</h2>
        
        {PRODUCTS.map((productData) => (
        <Product key={productData.id} data={productData} />
       ))}
      </div>
    </React.Fragment>
  );
};
export default Shop;