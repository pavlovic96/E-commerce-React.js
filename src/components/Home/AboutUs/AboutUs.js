import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-wrap">
      <Link to={"/about-us-page"} className="about-us-link">
        <Row>
          <Col sm={7}>
            <div className="about-us-cover">
              <h2 className="about-us-headline">About VINTAGE</h2>
            </div>
          </Col>
          <Col sm={5}>
            <div className="about-us-text-wrap">
              <p className="about-us-short">
                House of Vintage is a portal to the past, nestled in the heart
                of our vibrant city. We curate an enchanting collection of
                vintage wonders that whisper stories from days gone by.
              </p>
              <p className="about-us-short second">
                Our journey began decades ago, driven by a deep passion for all
                things vintage. Over the years, we've scoured the globe for
                extraordinary finds, from antique furniture to nostalgic
                memorabilia.
              </p>
            </div>
          </Col>
        </Row>
      </Link>
    </div>
  );
};

export default AboutUs;
