import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Select from "react-select";
const AddProductModal = ({ show, onHide }) => {
  const [productName, setProductName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [ram, setram] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleProductSubmit = (event) => {
    event.preventDefault();

    setProductName("");
    setBrandName("");
    setram("");
    setProductPrice("");
    setSelectedOptions([]);
    onHide();
  };

  const options = [
    { value: "Best value", label: "Best value" },
    { value: "Best camera", label: "Best camera" },
    { value: "Best performace", label: "Best performace" },
  ];

  return (
    <Modal show={show} onHide={onHide} className="add-modal">
      <Modal.Header closeButton>
        <Modal.Title>Add Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleProductSubmit}>
          <Form.Group controlId="productName">
            <Form.Label>Product Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your product name:"
              value={productName}
              onChange={(event) => setProductName(event.target.value)}
            />
          </Form.Group>

          <Row>
            <Col>
              <Form.Group controlId="brandName">
                <Form.Label>Brand:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Brand Name"
                  value={brandName}
                  onChange={(event) => setBrandName(event.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="ram">
                <Form.Label>Ram/Rom:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ram/Rom"
                  value={ram}
                  onChange={(event) => setram(event.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="selectedOptions">
            <Form.Label>Tags:</Form.Label>
            <Select
              isMulti
              options={options}
              value={selectedOptions}
              onChange={setSelectedOptions}
            />
          </Form.Group>

          <Form.Group controlId="productPrice">
            <Form.Label>Product price:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Product Price"
              value={productPrice}
              onChange={(event) => setProductPrice(event.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
          <Button variant="secondary"><i className="ri-close-circle-line"></i> Cancel</Button>
          <Button variant="primary"><i className="ri-checkbox-circle-line"></i>Publish</Button>
        </Modal.Footer>
    </Modal>
  );
};

export default AddProductModal;
