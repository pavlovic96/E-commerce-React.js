import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <Container>
        <Row>
          <nav className="header-nav">
            <Col md={9}>
              <Link to="/" className="logo">
                SHOP website LOGO
              </Link>
            </Col>
            <Col md={3}>
              <ul className="nav-list">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-list-item isActive" : "nav-list-item"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/shop"
                  className={({ isActive }) =>
                    isActive ? "nav-list-item isActive" : "nav-list-item"
                  }
                >
                  Shop
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "nav-list-item isActive" : "nav-list-item"
                  }
                >
                  Contact
                </NavLink>
                <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                    isActive ? "nav-list-item isActive" : "nav-list-item"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-cart2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                  </svg>
                </NavLink>
              </ul>
            </Col>
          </nav>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
