import React from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../../products";
import Product from "./Product/Product";
import Footer from "../Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";

import "./Shop.css";

const Shop = () => {
  return (
    <div className="shop">
      <Container>
        <Row>
          <div className="shopDiv">
            {PRODUCTS.map((product) => (
              <Link to={"/shop/" + product.id} className="productLink"  key={product.id}>
                <Product data={product} />
              </Link>
            ))}
          </div>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
};

export default Shop;
