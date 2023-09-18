import React from "react";
import HomeCarousel from "./Carousel/HomeCarousel";
import Footer from "../Footer/Footer";
import AboutUs from "./AboutUs/AboutUs";
import Delivery from "./Delivery/Delivery";
import JoinUs from "./JoinUs/JoinUs";
import { Container, Row, Col } from "react-bootstrap";


import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="hero-section-home animate__animated animate__fadeIn">
        <div className="hero">V I N T A G E</div>
      </div>
      <Container>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <HomeCarousel />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <AboutUs />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <Delivery />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <JoinUs />
          </Col>
        </Row>
      </Container>
      <Footer />
     
    </div>
  );
};

export default Home;
