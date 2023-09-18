import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PRODUCTS } from "../../../../products";
import { Container, Row, Col } from "react-bootstrap";
import { ShopContext } from "../../../../context/ShopContextProvider";
import Footer from "../../../Footer/Footer";

import "./Item.css";

const Item = () => {
  const { index } = useParams();
  const { addToCart } = useContext(ShopContext);
  const [quantity, setChange] = useState(1);

  const prod = PRODUCTS.filter((product) => index === product.id)[0];

  const [added, setAdded] = useState("");

  const addedMessage = () => {
    setAdded("Successfully added!");
    setTimeout(() => {
      setAdded("");
    }, 1000);
  };

  const checkInput = () => {
    if (quantity <= 1) {
      setChange(1);
    } else {
      setChange(Number(quantity) - 1);
    }
  };

  return (
    <div>
      <Container>
        <Row>
          <Col md={6}>
            <img src={prod.img} alt="house-of-vintage" className="itemImg" />
          </Col>
          <Col md={6}>
            <div className="info">
              <p className="itemName">{prod.productName}</p>
              <p className="itemDesc">{prod.description}</p>
              <p className="itemPrice">${prod.price}</p>
              <label htmlFor="quantity" className="labelQuantity">
                Quantity:
              </label>

              <div className="changeQuant">
                <button type="button" className="minusBtn" onClick={checkInput}>
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
                  name="number"
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setChange(e.target.value)}
                />
                <button
                  type="button"
                  className="plusBtn"
                  onClick={() => {
                    setChange(Number(quantity) + 1);
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
              <div className="addOrContinue">
                <button
                  className="addBtn"
                  type="button"
                  onClick={(e) => {
                    addToCart(index, quantity);
                    setChange(1);
                    addedMessage();
                  }}
                >
                  Add to cart{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-cart2 addBtnCart"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                  </svg>
                </button>
                <Link to="/shop" className="itemContinue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    fill="currentColor"
                    className="bi bi-box-arrow-in-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                    />
                  </svg>
                  Continue Shopping
                </Link>
              </div>
              <p className="addedItem">{added}</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Item;
