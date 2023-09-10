import React, { useState } from "react";
import HomeCarousel from "./Carousel/HomeCarousel";
import Footer from "../Footer/Footer";

import { Container, Row, Col } from "react-bootstrap";

import "./Home.css";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {

  return (
    <div>
      <div className="hero-section-home animate__animated animate__fadeIn">
        <div className="hero">
         V I N T A G E
          </div>
       
      </div>
      <Container>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <HomeCarousel />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
