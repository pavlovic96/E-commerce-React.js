import React from "react";
import "./CarouselItem.css";
import { Link } from "react-router-dom";

const CarousleItem = (props) => {
  const { img, id } = props.data;
  return (
    <Link to={"/shop/" + [id]} className="linkCarousel">
      <div className="carouselItem">
        <div className="img-wrap">
          <img className="carouselImg" src={img} alt='image' />
        </div>
        <p className="see-more">See more</p>
      </div>
    </Link>
  );
};

export default CarousleItem;
