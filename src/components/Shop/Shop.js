import React from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../../products";
import Product from "../Product/Product";
import { Container, Row, Col } from "react-bootstrap";


import "./Shop.css";

const Shop = () => {
  return (
    <div className="shop">
    <Container>
      <Row>
        {PRODUCTS.map((product) => (
          <Col md={4} key={product.id}>
            <Link to={"/shop/" + product.id} className="productLink" >
              <Product data={product} key={product.id} />
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
};

export default Shop;
