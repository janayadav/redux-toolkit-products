import { NavbarCollapse } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const NavBarPanel = () => {
  const cartProducts = useSelector((state) => state.cart);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">REDUX TOOLKIT</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Nav>
          <Nav.Link to="/" as={Link} href="#action1">
            Products
          </Nav.Link>
        </Nav>

        <Navbar.Toggle />
        <NavbarCollapse className="justify-content-end">
          <Navbar.Text>
            <Nav.Link to="/Cart" as={Link} href="#action1">
              my bag {cartProducts.length}
            </Nav.Link>
          </Navbar.Text>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default NavBarPanel;
