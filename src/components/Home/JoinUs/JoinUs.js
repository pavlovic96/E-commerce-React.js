import React from "react";
import {Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./JoinUs.css";

const JoinUs = () => {
  return (
    <div className="join-us-wrap">
      <Link to={"/join-us-page"} className="join-us-link">
        <Row>
          <Col md={7}>
            <div className="join-us-cover"></div>
          </Col>
          <Col md={5}>
            <div className="p">
            <h2 className="join-us-headline">Join Us</h2>
            <p className="join-us-short">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, in
              possimus? Voluptas veniam quia maxime. Eligendi consectetur
              officiis id laborum esse similique mollitia, voluptates, corrupti
              ut repudiandae dignissimos sunt. Eaque!
            </p>
            </div>
          </Col>
        </Row>
      </Link>
    </div>
  );
};

export default JoinUs;
