import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../../context/ShopContextProvider";
import "./TotalAmount.css";
import { PRODUCTS } from "../../../products";

const TotalAmount = () => {
  const { cart, updateTotal } = useContext(ShopContext);
  let totalPrice = 0;

  const totalCalculator = () => {
    totalPrice = 0;
    PRODUCTS.map((product) => {
      if (cart[product.id] >= 1) {
        totalPrice += product.price * cart[product.id];
      }
    });
    return totalPrice;
  };

  const orderClick = (e) => {
    if (totalCalculator() === 0) {
      e.preventDefault();
    }
   updateTotal(totalCalculator())
  };

  return (
    <div className="totalAmount">
      <div className="line"></div>
      <p className="total">Total: ${totalCalculator()}</p>
      <Link to="/shop" className="continue">
        Continue Shopping <span>or</span>
      </Link>
      <Link to="/order" className="order" onClick={(e) => orderClick(e)}>
        Order
      </Link>
    </div>
  );
};

export default TotalAmount;
