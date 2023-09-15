import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./JoinUs.css";

const JoinUs = () => {
  return (
    <div className="join-us-wrap">
      <Link to={"/join-us-page"} className="join-us-link">
        <Row>
          <Col md={7}>
            <div className="join-us-cover">
              <h2 className="join-us-headline">Join Us</h2>
            </div>
          </Col>
          <Col md={5}>
            <div className="join-us-text-wrap">
              <p className="join-us-short">
              At House of Vintage, we're more than just a store; we're a vibrant community of vintage enthusiasts. As a member, you'll enjoy exclusive perks, including member-only discounts and early access to new arrivals. Join us today by signing up for our newsletter and be part of our journey to celebrate the timeless beauty of the past.
              </p>
            </div>
          </Col>
        </Row>
      </Link>
    </div>
  );
};

export default JoinUs;
