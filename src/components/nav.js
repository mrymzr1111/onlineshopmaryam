import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faBasketShopping, faChessBishop, faShop, faShopSlash, faShoppingBag, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ShopConext } from "../context/shopcontext";
 import '../components/nav.css'
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { faStore } from "@fortawesome/free-solid-svg-icons/faStore";


const Nav = () => {
  const {cartItem}=useContext(ShopConext);
  //const itemCount = cartItem ? cartItem.reduce((prev, current) => prev + current.count, 0) : 0;
  const itemCount = cartItem?.reduce((prev , current)=> {
    return prev + current.count
  },0)
 

  return (
<div className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand"><b>MaryamShop</b></a>
        <ul className="navbar-nav">
          <li className="nav-item">
             <Link to="shop" className="nav-link"> <FontAwesomeIcon icon={faHome} />Shop</Link>
          </li>
          <li className="nav-item">
        <Link to="Cart" className="nav-link">  <FontAwesomeIcon icon={faShoppingCart} />  cart
        { itemCount>0 && <span className="cart-items-count">{itemCount}</span>}
     
        </Link>
         </li>
         
               
        </ul>
      </div>
    </div>
  );
};
export default Nav;