import React from "react";
import { Link } from "react-router-dom";
import {Row, Col } from "react-bootstrap";

import './Delivery.css'

const Delivery = () => {
  return (
    <div className="delivery-wrap">
      <Link to={"/delivery-page"} className="delivery-link">
        <Row>
          <Col md={7}>
            <h2 className="delivery-headline">Delivery</h2>
            <p className="delivery-short">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, in
              possimus? Voluptas veniam quia maxime. Eligendi consectetur
              officiis id laborum esse similique mollitia, voluptates, corrupti
              ut repudiandae dignissimos sunt. Eaque!
            </p>
          </Col>
          <Col md={5}>
            <div className="delivery-cover"></div>
          </Col>
        </Row>
      </Link>
    </div>
  );
};

export default Delivery;
