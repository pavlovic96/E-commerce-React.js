import React from "react";
import Carousel from "./Carousel/Carousel";
import Footer from "../Footer/Footer";

import { Container, Row, Col } from "react-bootstrap";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="hero-section-home">
      </div>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h1>Best sellers</h1>
            <Carousel />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
