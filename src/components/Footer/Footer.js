import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MapContainer from "./Map/MapContainer";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col md="4">
            <div to="/" className="logoFooter">
              House of Vintage
            </div>
            <ul className="info1">
              <li>About us</li>
              <li>Delivery</li>
              <li>Return policy</li>
            </ul>
          </Col>
          <Col md="4">
            <div className="info2">
              <h4 className="infoTitle">Adress:</h4>
              <p className="infoData">Vuka Karadzica 5</p>
              <p className="infoData">11000 Belgrade</p>
              <h4 className="infoTitle">Phone</h4>
              <p className="infoData">+381 999 999 999</p>
              <h4 className="infoTitle">Email:</h4>
              <p className="infoData">hauseofvintage@gmail.com</p>
            </div>
          </Col>
          <Col md="4">
            <MapContainer />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
