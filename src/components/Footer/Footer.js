import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col md="4">
            <ul>
              <li>About us</li>
              <li>Delivery</li>
              <li>Return policy</li>
            </ul>
          </Col>
          <Col md="4">
            <h4>Adress:</h4>
            <p>Vuka Karadzica 5</p>
            <p>11000 Belgrade</p>
            <h4>Phone</h4>
            <p>+381 999 999 999</p>
            <h4>Email:</h4>
            <p>giftbox@gmail.com</p>
          </Col>
          <Col md="4"></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
