import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../../context/ShopContextProvider";
import "./TotalAmount.css";
import { PRODUCTS } from "../../../products";

const TotalAmount = () => {
  const { cart } = useContext(ShopContext);

  let totalPrice = 0;

  const total = () => {
    PRODUCTS.map((product) => {
      if (cart[product.id] >= 1) {
        totalPrice += product.price * cart[product.id];
      }
    });

    return totalPrice;
  };

  return (
    <div className="totalAmount">
      <div className="line"></div>
      <p className="total">Total: ${total()}</p>
      <Link to="/shop" className="continue">
        Continue Shopping <span>or</span>
      </Link>
      <button type="button" className="order">Order</button>
    </div>
  );
};

export default TotalAmount;
