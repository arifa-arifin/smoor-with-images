import React, { Component } from "react";
import { Navbar, Nav, Form } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <div className="container-fluid m-0 px-2">
        <div className="row">
          <div className="col-12 p-0">
            <Navbar bg="dark" variant="dark" expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#home">
                    <span className="text-danger px-2">Richmond Town</span>
                  </Nav.Link>
                  <Nav.Link href="#link">
                    <select
                      name="country"
                      class="countries  m-0 px-2"
                      id="countryId"
                    >
                      <option value="">Select Country</option>
                    </select>
                  </Nav.Link>
                  <Nav.Link href="#home">
                    <a href="#">
                      <img
                        className="px-2"
                        src="images/ic-search.png"
                        alt="Search Icon"
                        width="50"
                      />
                    </a>
                  </Nav.Link>
                </Nav>
                <Form inline>
                  <select
                    name="country"
                    class="countries  m-0 px-2"
                    id="countryId"
                  >
                    <option value="">Hello! Smoor</option>
                  </select>
                  <a href="#">
                    <img src="" alt="cart" />
                  </a>
                </Form>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
