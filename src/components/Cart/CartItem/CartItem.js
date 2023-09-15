import React, { useContext } from "react";
import { ShopContext } from "../../../context/ShopContextProvider";
import "./CartItem.css";

import { Container, Row, Col } from "react-bootstrap";

const CartItem = (props) => {
  const { updateQuantity, cart, deleteItem } = useContext(ShopContext);
  const { img, productName, id, price } = props.data;
  const { value } = props;

  const checkInput = () => {
    if (value <= 1) {
      updateQuantity(id, 1);
    } else {
      updateQuantity(id, Number(value) - 1);
    }
  };

  return (
    <div className="cartItem">
      <Container>
        <Row>
          <Col md={6}>
            <img
              src={img}
              alt=""
              className="cartImg animate__animated animate__fadeIn"
            />
          </Col>
          <Col md={6}>
            <div className="descriptionInCart">
              <h2>{productName}</h2>
              <p className="priceInCart">
                Price: ${price} x {cart[id]} = {price * cart[id]}
              </p>

              <div className="changeQuantInCart">
                <button
                  type="button"
                  className="minusBtn"
                  onClick={() => {
                    checkInput();
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="currentColor"
                    className="bi bi-dash-lg minus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                    />
                  </svg>
                </button>
                <input
                  type="number"
                  name="quantityInCart"
                  id="quantityInCart"
                  value={value}
                  onChange={(e) => {
                    updateQuantity(id, e.target.value);
                  }}
                />
                <button
                  type="button"
                  className="plusBtn"
                  onClick={() => {
                    updateQuantity(id, Number(value) + 1);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-plus plus"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </svg>
                </button>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                fill="currentColor"
                className="bi bi-trash3 delete"
                viewBox="0 0 16 16"
                onClick={() => {
                  deleteItem(id);
                }}
              >
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
              </svg>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CartItem;
