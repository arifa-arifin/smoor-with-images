import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

class Menu extends Component {
  render() {
    return (
      <>
        <Navbar expand="lg" className="w-100 p-0 m-0 navbar transparent ">
          <Navbar.Toggle className="navbar-toggler-menu" aria-controls="here" />
          <Navbar.Collapse
            className="collapse-menu"
            id=" navbar transparent w-100 d-inline-flex "
          >
            <Nav className="justify-content-around navbar-menu transparent p-0 m-0 w-100">
              <Nav.Link href="#home">
                <a className="nav-link text-white">
                  <b>Choclates</b>
                </a>
              </Nav.Link>
              <Nav.Link href="#home">
                <a className="nav-link text-white">
                  <b>Cakes</b>
                </a>
              </Nav.Link>
              <Nav.Link href="#home">
                <a className="nav-link text-white">
                  <b>delicasies</b>
                </a>
              </Nav.Link>
              <Nav.Link href="#home">
                <a className="nav-link text-white">
                  <b>Smoor</b>
                </a>
              </Nav.Link>
              <Nav.Link href="#home">
                <a className="nav-link text-white">
                  <b>Cookies</b>
                </a>
              </Nav.Link>
              <Nav.Link href="#link">
                <a className="nav-link text-white">
                  <b>Crisps</b>
                </a>
              </Nav.Link>
              <Nav.Link href="#home">
                <a className="nav-link text-white">
                  <b>Cooking</b>
                </a>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default Menu;
