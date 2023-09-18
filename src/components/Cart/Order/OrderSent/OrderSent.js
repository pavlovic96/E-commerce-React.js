import React, { useEffect} from "react";
import { useContext } from "react";
import Footer from "../../../Footer/Footer";
import { ShopContext } from "../../../../context/ShopContextProvider";
import './OrderSent.css'

const OrderSent = () => {
const {setNewCart}=useContext(ShopContext)

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(setNewCart()));
  }, [setNewCart]);

  return (
    <div>
    <div className='order-sent'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="40px"
        viewBox="0 0 448 512"
        className='success'
      >
        <path d="M342.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 402.7 54.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z" />
      </svg>
      <p className='order-sent-msg'>Your order has been successfully placed.</p>
    </div>
    <Footer/>
    </div>
  );
};

export default OrderSent;
