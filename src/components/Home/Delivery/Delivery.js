import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

import "./Delivery.css";

const Delivery = () => {
  return (
    <div className="delivery-wrap">
      <Link to={"/delivery-page"} className="delivery-link">
        <Row>
          <Col md={7}>
            <div className="delivery-text-wrap">
            <p className="delivery-short">
              House of Vintage offers dependable and secure delivery services,
              including international shipping options for our global customers.
              We take great care in packaging your cherished finds to ensure
              they arrive in pristine condition.
            </p>
            <p className="delivery-short second">
              You can choose from various shipping methods, and our friendly
              customer support team is always ready to assist you with any
              questions or concerns you may have about your orders. Trust us to
              bring the nostalgia of the past right to your doorstep
            </p></div>
          </Col>
          <Col md={5}>
            <div className="delivery-cover">
              <h2 className="delivery-headline">Delivery</h2>
            </div>
          </Col>
        </Row>
      </Link>
    </div>
  );
};

export default Delivery;
