import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PRODUCTS } from "../../products";
import { Container, Row, Col } from "react-bootstrap";
import { ShopContext } from "../../context/ShopContextProvider";

import "./Item.css";

const Item = () => {
  const { index } = useParams();
  const { addToCart } = useContext(ShopContext);
  const [quantity, setChange] = useState(1);

  const prod = PRODUCTS.filter((product) => index == product.id)[0];

  const [added,setAdded] = useState("");

  const addedMessage = () => {
    setAdded("Added!");
    setTimeout(() => {
      setAdded("");
    }, 1000);
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <img src={prod.img} alt="image" />
        </Col>
        <Col md={6}>
          <div className="info">
            <p>{prod.productName}</p>
            <p>{prod.description}</p>
            <p>${prod.price}</p>
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              name="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setChange(e.target.value)}
            />
            <button
              className="add"
              type="button"
              onClick={(e) => {
                addToCart(index, quantity);
                setChange(1);
                addedMessage();
              }}
            >
              Add to cart
            </button>
            <p className="addedItem">{added}</p>
            <Link to="/shop" className="continue">
              Continue Shopping
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Item;
