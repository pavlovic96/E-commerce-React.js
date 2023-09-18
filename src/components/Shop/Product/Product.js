import React from "react";
import "./Product.css";

const Product = (props) => {
  const { productName, img, price } = props.data;
  return (

      <div className="oneProd animate__animated animate__fadeInUp">
       <div className="img-wrap"> <img className="prodImg" src={img} alt="product-image"/></div>
        <p className="prodName">{productName}</p>
        <p className="prodPrice">${price}</p>
      </div>
  );
};

export default Product;
