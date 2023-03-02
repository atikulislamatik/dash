import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const SingleProduct = ({ product, getTags }) => {
  const [showModal, setShowModal] = useState(false);

  const handlePhoneClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <td style={{ width: 350 }}>
        <div className="model d-flex">
          <a href={void 0} onClick={handlePhoneClick}>
            <img
              className="img"
              src={product.phone_images[0]}
              alt={product.phone_title}
            />
          </a>
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>{product.phone_title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row">
                {product.phone_images.map((img, index) => (
                  <>
                    <div className="col-3">
                      <div className="popup-imgs">
                        <img src={img} alt="index" />
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </Modal.Body>
          </Modal>
          <div className="content">
            <h2 className="title">{product.phone_title}</h2>
            <h3>{product.brand}</h3>
          </div>
        </div>
      </td>
      <td style={{ width: 200 }}>
        <p className="ram ">
          {product.ram} / {product.storage}
        </p>
      </td>
      <td style={{ width: 285 }}>
        <p class="tag-list">
          {getTags(product)
            .map((tag) => `${tag}`)
            .join("  ")}
        </p>
      </td>
      <td style={{ width: 200 }}>
        <p className="price text-end">TK {product.phone_price}</p>
      </td>
    </>
  );
};

export default SingleProduct;
