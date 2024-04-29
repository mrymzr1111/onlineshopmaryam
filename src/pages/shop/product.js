import React, { useContext, useState } from "react";
import { PRODUCTS } from "../../data/products";
import { ShopConext } from "../../context/shopcontext";
import { Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faCartFlatbed, faCartFlatbedSuitcase, faChartGantt, faChartSimple, faShopSlash, faShoppingBag, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faRemove } from "@fortawesome/free-solid-svg-icons/faRemove";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons/faCartPlus";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const{cartItem,addToCart,removeFromCart}=useContext(ShopConext);
  /*const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };*/
  const isInCart=cartItem ?.some((item)=> item.id===id)

  return (
    <div className="col-3 product-container">
      <div className="position-relative">
        <img src={productImage} alt={productName} className="img-fluid product-image" />
      </div>
      <div className="bg-light p-3 text-center">
        <h5>{productName}</h5>
        <p>Price: ${price}</p>
        <button className="btn btn-info mt-3" onClick={()=>addToCart(id)}> <FontAwesomeIcon icon={faCartShopping}/>
        +
        </button>
        <span className="mx-1">{cartItem?.filter((row)=> row.id===id)[0]?.count}</span>
        {   isInCart && (
        <button className="btn btn-primary btn-lg btn-block " onClick={()=>(removeFromCart(id))}>
          <FontAwesomeIcon icon={faCartShopping}/>
          -
        </button>
        )}
      </div>
    </div>
  );
};

export default Product;