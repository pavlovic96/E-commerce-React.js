import React from "react";
import Footer from "../../../Footer/Footer";

import { Container, Row, Col } from "react-bootstrap";

import "./DeliveryPage.css";
const DeliveryPage = () => {
  return (
    <div className="delivery-page-wrap">
      <div className="delivery-page-cover">
        <div className="delivery-page-cover-text">
          <h2 className="delivery-page-headline">
            Delivery
          </h2>
          <p className="delivery-page-subline">Delivering Nostalgia to Your Doorstep</p>
        </div>
      </div>
      <Container>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <p>
              At House of Vintage, we understand that the joy of discovering
              timeless treasures should be complemented by a hassle-free
              shopping experience. That's why we offer reliable and efficient
              delivery services right to your doorstep. Our dedicated team is
              committed to ensuring your vintage finds reach you in pristine
              condition and in a timely manner. We work diligently to package
              your purchases securely, so they arrive as beautiful as the day
              you fell in love with them in our store. Whether you're
              redecorating your home with our antique furniture or adding a
              touch of nostalgia to your wardrobe, you can trust House of
              Vintage to deliver your cherished items with care and precision.
            </p>
            <h4 className="delivery-page-headline2">Delivery Options</h4>
            <p>
              We offer a range of delivery options to suit your needs, including
              standard and expedited shipping. Rest assured, we work with
              reputable carriers to provide you with tracking information so you
              can monitor your delivery every step of the way.
            </p>

            <p>
              For our global vintage enthusiasts, we proudly offer international
              shipping services. No matter where you are in the world, you can
              enjoy the treasures from House of Vintage.
            </p>

            <h4 className="delivery-page-headline2">Customer Support</h4>

            <p>
              If you have any questions about our delivery services or need
              assistance with tracking your order, our friendly customer support
              team is here to help. Feel free to reach out to us, and we'll
              ensure your shopping experience with us is seamless and
              delightful. At House of Vintage, we not only bring history to your
              doorstep but also the convenience and peace of mind you deserve.
              Thank you for choosing us to be a part of your vintage journey.
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default DeliveryPage;
