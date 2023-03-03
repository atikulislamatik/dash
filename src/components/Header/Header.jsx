import React, { useEffect, useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AddProductModal from "../AddProductModal/AddProductModal";
const Header = () => {
  const [showAddProductModal, setShowAddProductModal] = useState(false);

  const handleShowAddProductModal = () => setShowAddProductModal(true);
  const handleHideAddProductModal = () => setShowAddProductModal(false);

  const [isSticky, setSticky] = useState(false);
  const [expand, updateExpanded] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 300) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
  }, []);

  return (
    <>
      <Navbar expand="lg" className={`navbar-area ${isSticky ? "sticky" : ""}`}>
        <Container>
          <Navbar.Brand href="#">
            <Nav.Link href="/">
              <h3>Logo</h3>
            </Nav.Link>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Form inline className="search-bar">
                <FormControl
                  type="text"
                  placeholder="Search by Title or Brand"
                  className="mr-sm-2"
                />
                <Button variant="outline-primary">
                  <i className="ri-search-line"></i>
                </Button>
              </Form>
              <Button
                className="header-btn"
                onClick={handleShowAddProductModal}
              >
                Add Product
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <AddProductModal
        show={showAddProductModal}
        onHide={handleHideAddProductModal}
      />
    </>
  );
};

export default Header;
