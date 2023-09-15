import React from "react";
import Footer from "../../../Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";

import "./AboutUsPage.css";

const AboutUsPage = () => {
  return (
    <div className="about-page-wrap">
      <div className="about-page-cover">
        <div className="about-page-cover-text">
          <h2 className="about-page-headline">Welcome to House of Vintage</h2>
          <p className="about-page-subline">Where Timeless Treasures Await</p>
        </div>
      </div>
      <Container>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <p>
              At House of Vintage, we believe that every item has a story to
              tell. Nestled in the heart of the bustling city, our store is a
              time capsule that brings the past to life. Step inside, and you'll
              find yourself immersed in a world of nostalgia, where the echoes
              of yesteryears resonate through an exquisite collection of vintage
              treasures.
            </p>
            <h4 className="about-page-headline2">Our Journey Through Time</h4>
            <p>
              Our story began decades ago when a passionate group of vintage
              enthusiasts decided to embark on a unique journey. The vision was
              simple yet profound – to curate a haven for all things vintage,
              where the rich tapestry of history could be relived and
              appreciated. With unwavering dedication, House of Vintage was
              born. Over the years, we've scoured the globe to unearth the most
              extraordinary vintage finds. From antique furniture to timeless
              fashion pieces, from rare collectibles to nostalgic memorabilia,
              our collection is a testament to the enduring beauty and
              craftsmanship of eras gone by.
            </p>
            <h4 className="about-page-headline2">A Glimpse into Our Collection</h4>
            <p>
              Each item in our store has been carefully selected for its
              uniqueness, quality, and the stories it carries. When you explore
              our aisles, you'll discover more than just products; you'll
              uncover memories and emotions that resonate with the past. Whether
              you're a seasoned collector or a newcomer to the world of vintage,
              our team is here to guide you through our eclectic selection,
              helping you find that perfect piece to add a touch of history to
              your life.
            </p>

            <h4 className="about-page-headline2">Our Commitment to Sustainability</h4>

            <p>
              At House of Vintage, we're not just about preserving the past;
              we're also dedicated to protecting the future. Our commitment to
              sustainability drives our practices, from sourcing eco-friendly
              materials for our store decor to promoting the concept of "vintage
              recycling." We believe that by cherishing and reusing vintage
              items, we contribute to a more sustainable and conscious
              lifestyle.
            </p>

            <h4 className="about-page-headline2">Join the Journey</h4>
            <p>
              House of Vintage is more than just a store; it's a destination for
              those who appreciate the beauty of the past and the promise of the
              future. Whether you're seeking a unique piece to adorn your home
              or want to take a stroll down memory lane, our doors are always
              open to you.
            </p>

            <p>
              We invite you to step into House of Vintage, where the allure of
              the past meets the excitement of the present. Explore, discover,
              and create your own story amidst our timeless treasures. We're
              thrilled to be a part of your journey through history and look
              forward to sharing the enchantment of vintage with you.
            </p>

            <p>Thank you for being a part of our story.</p>
            <p>Sincerely, The House of Vintage Team</p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
