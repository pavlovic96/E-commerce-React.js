import React from "react";
import {Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-wrap">
      <Link to={"/about-us-page"} className="about-us-link">
        <Row>
          <Col md={7}>
            <div className="about-us-cover"></div>
          </Col>
          <Col md={5}>
            <div className="p">
            <h2 className="about-us-headline">About VINTAGE</h2>
            <p className="about-us-short">
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

export default AboutUs;
