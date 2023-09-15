import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../../Footer/Footer";
import "./JoinUsPage.css";

const JoinUsPage = () => {
  return (
    <div className="join-us-page-wrap">
      <div className="join-us-page-cover">
        <div className="join-us-page-cover-text">
          <h2 className="join-us-page-headline">Join Us</h2>
          <p className="join-us-page-subline">Embrace the Vintage Vibe</p>
        </div>
      </div>
      <Container>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <p>
              At House of Vintage, we're not just a store; we're a community of
              passionate individuals who share a love for the past and a
              fascination with timeless treasures. We invite you to join our
              community and become a part of our vintage journey.
            </p>
            <h4 className="join-us-page-headline2">
              What You Can Expect as a Member
            </h4>
            <p>
              Exclusive Offers: Enjoy access to member-only discounts,
              promotions, and early access to new arrivals. We value our
              community, and we want to ensure you have the opportunity to
              explore and acquire your favorite vintage pieces. Vintage
              Enthusiast Events: Be the first to know about our vintage-themed
              events, from exclusive product launches to curated exhibitions. As
              a member, you'll have a front-row seat to the exciting happenings
              at House of Vintage. Expert Insights: Gain insights and tips from
              our team of vintage experts. Whether you're a seasoned collector
              or just starting your vintage journey, we're here to share our
              knowledge and passion with you. Community Connection: Connect with
              fellow vintage enthusiasts, exchange stories, and showcase your
              unique finds. House of Vintage is not just a store; it's a place
              to connect with kindred spirits who appreciate the beauty of the
              past.
            </p>
            <h4 className="join-us-page-headline2">How to Join:</h4>
            <p>
              Becoming a member of the House of Vintage community is easy.
              Simply sign up for our newsletter, and you'll instantly become a
              part of our vibrant vintage family. We look forward to sharing the
              magic of the past with you and building lasting connections within
              our community. Join us at House of Vintage, where history comes
              alive, and the passion for nostalgia thrives. Together, let's
              celebrate the beauty of bygone eras and create new memories to
              cherish.
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default JoinUsPage;
