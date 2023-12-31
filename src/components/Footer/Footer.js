import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MapContainer from "./Map/MapContainer";
import { Link } from "react-router-dom";

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
              <li>
                <Link to={"/about-us-page"} className="footer-list">About us</Link>
              </li>
              <li>
                <Link to={"/delivery-page"} className="footer-list">Delivery</Link>
              </li>
              <li>
                <Link to={"/join-us-page"} className="footer-list">Join Us</Link>
              </li>
            </ul>
          </Col>
          <Col md="4">
            <div className="info2">
              <h4 className="infoTitle">Adress:</h4>
              <p className="infoData">Street of Vintage 195</p>
              <p className="infoData">11000 Belgrade</p>
              <h4 className="infoTitle">Phone</h4>
              <p className="infoData">+381 999 999 999</p>
              <h4 className="infoTitle">Email:</h4>
              <p className="infoData">houseofvintage@gmail.com</p>
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
