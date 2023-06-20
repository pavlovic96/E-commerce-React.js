import React from "react";
import Footer from "../Footer/Footer";

import { Container, Row, Col } from "react-bootstrap";

import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="hero-section-contact">
        <h1>
          Be free <br /> to contact us
        </h1>
      </div>
      <Container>
        <Row>
          <Col md={12}>
            <form className="contact-us-form">
              <label htmlFor="name">Your name:</label>
              <input type="text" name="name" id="name" />
              <label htmlFor="email">E-mail:</label>
              <input type="email" />
              <label htmlFor="msg">Message:</label>
              <textarea name="" id="" cols="30" rows="4"></textarea>
              <button type="button">Send</button>
            </form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
