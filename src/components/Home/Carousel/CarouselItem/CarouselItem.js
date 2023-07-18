import React from 'react';
import './CarouselItem.css'
import { Link } from 'react-router-dom';

const CarousleItem = (props) => {

    const {productName, price, img,id} = props.data
    return ( 
        <Link to={'/shop/'+[id]} className='linkCarousel'>
        <div className="carouselItem animate__animated animate__fadeInUp">
          <img className="carouselImg" src={img} />
          <p className="carouselName">{productName}</p>
          <p className="carouselPrice">${price}</p>
        </div></Link>
     );
}
 
export default CarousleItem;