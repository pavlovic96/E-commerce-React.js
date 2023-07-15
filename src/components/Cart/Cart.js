import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContextProvider";
import { PRODUCTS } from "../../products";
import CartItem from "./CartItem/CartItem";
import TotalAmount from "./TotalAmount/TotalAmount";
import { Container, Row, Col } from "react-bootstrap";

import "./Cart.css";

const Cart = () => {
  const { cart } = useContext(ShopContext);
  let verification = false;

  return (
    <div>
      <h1 className="yourCart">Your cart:</h1>
      <Container className="cartItems">
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            {PRODUCTS.map((product) => {
              let id = product.id;
              if (cart[id] != null) {
                verification = true;
                let value = cart[id];
                return (
                  <CartItem data={product} key={product.id} value={value} />
                );
              }
            })}
            <p className={!verification ? "display" : "displayNone"}>
              No items yet!
            </p>
          </Col>
        </Row>
      </Container>

      <div>
        <TotalAmount />
      </div>
    </div>
  );
};

export default Cart;
