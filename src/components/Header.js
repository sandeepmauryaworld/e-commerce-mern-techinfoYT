import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
// import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
 
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
        <Container>
          <LinkContainer to={'/'}>
            <Navbar.Brand>Online Shop</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
             <LinkContainer to={'/cart'}>
             <Nav.Link>
                  <i className="fas fa-shopping-cart"></i>
                  &nbsp; cart
                </Nav.Link>
             </LinkContainer>
                <LinkContainer to='/sign-in'>
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i>
                  &nbsp; signin
                </Nav.Link>
                </LinkContainer>
              {/* </LinkContainer> */}
             
                <NavDropdown>
                  {/* <LinkContainer to="/profile"> */}
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  {/* </LinkContainer> */}
                  <NavDropdown.Item>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;