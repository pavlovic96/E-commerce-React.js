import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MapContainer from "../Map/MapContainer";
import "./Footer.css";


const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col md="4">
          <div to="/" className="logoFooter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  className="bi bi-gift"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z" />
                </svg>
                GiftBox
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
            <p className="infoData">giftbox@gmail.com</p>
            </div>
          </Col>
          <Col md="4"><MapContainer/></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer