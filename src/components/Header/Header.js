import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, Link } from "react-router-dom";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/ShopContextProvider";
import "./Header.css";
import { useContext } from "react";

function Header() {
  const { cart } = useContext(ShopContext);

  let finalNumberOfItems = 0;

  const numberOfItems = () => {
    PRODUCTS.map((product) => {
      let id = product.id;
      if (cart[id] != null) {
        finalNumberOfItems+= cart[id];
      }
    });
    return finalNumberOfItems;
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="header-bgd" sticky="top">
      <Container>
        <Navbar.Brand href="/" className="c-1">
          <p className="logo">House of Vintage</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink exact to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/shop" className="nav-link">
              Shop
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact Us
            </NavLink>
            <NavLink to="/cart" className="nav-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-cart2"
                viewBox="0 0 16 16"
              >
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
              </svg>
              <div className="number-of-items">{numberOfItems()}</div>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
