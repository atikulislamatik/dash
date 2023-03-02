import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const SingleProduct = ({ product, getTags }) => {
  const tags = getTags(product);

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
        <div className="tag-list">
          {tags.map((tag, index) => {
            let background, border;
            if (tag === "Best Camera") {
              background = "rgba(135, 76, 114, 0.1)";
              border = "1px solid #874C72";
            } else if (tag === "Best Value") {
              background = "rgba(221, 158, 16, 0.1)";
              border = "1px solid #DD9E10";
            } else {
              background = "rgba(17, 160, 219, 0.1)";
              border = "1px solid #11A0DB";
            }
            return (
              <p
                key={index}
                style={{ background, border }}
                className={`tag tag${index + 1}`}
              >
                {tag}
              </p>
            );
          })}
        </div>
      </td>
      <td style={{ width: 200 }}>
        <p className="price text-end">TK {product.phone_price}</p>
      </td>
    </>
  );
};

export default SingleProduct;
