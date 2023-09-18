import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ShopContext } from "../../../context/ShopContextProvider";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { PRODUCTS } from "../../../products";
import "./Order.css";

const Order = () => {
  const { cart, total } = useContext(ShopContext);
  const navigate = useNavigate();
  
  const getOrder = () => {
    let orderItems = "Total:" + total + "$;  ";
    PRODUCTS.map((product) => {
      let id = product.id;
      if (cart[id] != null) {
        orderItems += product.productName + "-" + cart[id] + "; ";
      }
    });
    return orderItems;
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_98u7ujh",
        "template_oylpt67",
        form.current,
        "l52ox6RJ0E73zAw7m"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    navigate("/ordersent");
  };

  return (
    <Container>
      <Row>
        <Col md={12}>
          <div className="order-div">
            <form
              className="order-form"
              ref={form}
              onSubmit={(e) => sendEmail(e)}
            >
              <label htmlFor="order-fullname">Full Name:</label>
              <input
                type="text"
                name="order-fullname"
                id="order-fullname"
                required={true}
              />
              <label htmlFor="order-address">Street Address:</label>
              <input
                type="text"
                name="order-address"
                id="order-address"
                required={true}
              />
              <label htmlFor="order-city">City:</label>
              <input
                type="text"
                name="order-city"
                id="order-city"
                required={true}
              />
              <label htmlFor="order-zip">ZIP Code:</label>
              <input
                type="number"
                name="order-zip"
                id="order-zip"
                required={true}
              />
              <label htmlFor="order-country">Country:</label>
              <select name="order-country" id="order-country" required={true}>
                <option value="serbia">Serbia</option>
                <option value="bih">Bosnia and Herzegovina</option>
                <option value="montenegro">Montenegro</option>
                <option value="croatia">Croatia</option>
              </select>
              <label htmlFor="order-email">E-mail:</label>
              <input
                type="email"
                name="order-email"
                id="order-email"
                required={true}
              />
              <label htmlFor="order-phone">Phone number:</label>
              <input
                type="tel"
                name="order-phone"
                id="order-phone"
                required={true}
              />
              <div className="order-review">
                <textarea
                  name="full-order"
                  cols="30"
                  rows="10"
                  defaultValue={getOrder()}
                  hidden={true}
                ></textarea>
                <h3 className="total-in-order">Total Amount: ${total} </h3>
                <p className="payment">
                  Please be advised that the exclusive payment method accepted
                  is in cash.
                </p>
              </div>
              <input type="submit" value="Order" id="final-order" />
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Order;
