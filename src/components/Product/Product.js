import React from "react";
import "./Product.css";

const Product = (props) => {
  const { productName, img, price } = props.data;
  return (

      <div className="oneProd">
        <img className="prodImg" src={img} />
        <p className="prodName">{productName}</p>
        <p className="prodPrice">${price}</p>
      </div>
  );
};

export default Product;
