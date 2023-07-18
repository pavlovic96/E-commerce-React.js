import React from "react";
// import "./Carousel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import CarouselItem from "./CarouselItem/CarouselItem";
import { PRODUCTS } from "../../../products";

const HomeCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="carousel-section">
      <Carousel responsive={responsive}>
        {PRODUCTS.map((item) => (
          <CarouselItem data={item} key={item.id} />
        ))}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
