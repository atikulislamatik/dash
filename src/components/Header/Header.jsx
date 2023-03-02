import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AddProductModal from "../AddProductModal/AddProductModal";
const Header = () => {
  const [showAddProductModal, setShowAddProductModal] = useState(false);

  const handleShowAddProductModal = () => setShowAddProductModal(true);
  const handleHideAddProductModal = () => setShowAddProductModal(false);

  return (
    <>
      <Navbar expand="lg" className="navbar-area">
        <Container>
          <Navbar.Brand href="/">
            <h3>Logo</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Button onClick={handleShowAddProductModal}>Add Product</Button>
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
