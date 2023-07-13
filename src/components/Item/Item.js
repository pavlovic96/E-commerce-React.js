import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../products";
import { Container, Row, Col } from "react-bootstrap";
import { ShopContext } from "../../context/ShopContextProvider";

import "./Item.css";

const Item = () => {
  const { index } = useParams();
  const { addToCart } = useContext(ShopContext);

  const prod = PRODUCTS.filter((product) => index == product.id)[0];

  const [quantity, setChange] = useState(1);

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
              defaultValue="1"
              onChange={(e) => setChange(e.target.value)}
            />
            <button
              type="button"
              onClick={() => {
                addToCart(index, quantity);
              }}
            >
              Add to cart
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Item;
