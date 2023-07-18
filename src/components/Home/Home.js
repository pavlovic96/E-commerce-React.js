import React from "react";
import HomeCarousel from "./Carousel/HomeCarousel";
import Footer from "../Footer/Footer";

import { Container, Row, Col } from "react-bootstrap";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="hero-section-home animate__animated animate__fadeIn">
      </div>
      <Container>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <h1 className="bestSellers animate__animated animate__fadeInUp">Best sellers</h1>
            <HomeCarousel />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
