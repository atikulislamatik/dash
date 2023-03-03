import { Select } from "antd";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import jsonData from "../../data/data.json";
import SingleProduct from "./SingleProduct";

const { Option } = Select;

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("all");
  const [startIndex, setStartIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setData(jsonData.slice(startIndex, startIndex + 20));
  }, []);

  useEffect(() => {
    function handleScroll() {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      if (
        scrollTop + clientHeight >= scrollHeight &&
        startIndex + 20 < jsonData.length &&
        !isLoading
      ) {
        setIsLoading(true);
        setTimeout(() => {
          setData((prevData) => [
            ...prevData,
            ...jsonData.slice(startIndex + 20, startIndex + 40),
          ]);
          setStartIndex((prevStartIndex) => prevStartIndex + 20);
          setIsLoading(false);
        }, 1500);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [startIndex, isLoading]);

  const filteredData =
    filter === "all"
      ? data
      : data.filter((item) => {
          if (filter === "bestValue") {
            const isBestValue =
              item.phone_price <= 20000 &&
              item.ram >= 4 &&
              item.storage >= 64 &&
              (item.brand === "Xiaomi" || item.brand === "Realme");

            return isBestValue;
          } else if (filter === "bestCamera") {
            const mainCamera = parseInt(item.phone_details.mainCamera);
            const selfieCamera = parseInt(item.phone_details.selfieCamera);

            const isBestCamera =
              mainCamera >= 16 &&
              selfieCamera >= 13 &&
              item.storage >= 64 &&
              item.phone_details.external.includes("microSDXC (dedicated slot");

            return isBestCamera;
          } else if (filter === "bestPerformance") {
            const isBestPerformance =
              item.phone_details.chipset.includes("Snapdragon") &&
              item.phone_price > 20000 &&
              item.ram > 4 &&
              item.storage >= 128 &&
              item.display_amoled === true;

            return isBestPerformance;
          } else {
            return true;
          }
        });

  const getTags = (item) => {
    const tags = [];
    if (
      item.phone_price <= 20000 &&
      item.ram >= 4 &&
      item.storage >= 64 &&
      (item.brand === "Xiaomi" || item.brand === "Realme")
    ) {
      tags.push("Best Value");
    }
    if (
      item.phone_details.mainCamera &&
      item.phone_details.selfieCamera &&
      item.storage >= 64 &&
      item.phone_details.external.includes("microSDXC (dedicated slot")
    ) {
      tags.push("Best Camera");
    }
    if (
      item.phone_details.chipset.includes("Snapdragon") &&
      item.phone_price > 20000 &&
      item.ram > 4 &&
      item.storage >= 128 &&
      item.display_amoled === true
    ) {
      tags.push("Best Performance");
    }
    return tags;
  };

  
  return (
    <>
      <div className="product-area">
        <div className="container">
          <div className="top-content mb-4">
            <div className="row">
              <div className="col-lg-9">
                <h3>ALL Products</h3>
              </div>
              <div className="col-lg-3">
                <div className="select-btn form-group d-flex align-items-center">
                  <label>Sort by:</label>
                  <Select
                    className="form-control-custome ms-2"
                    style={{ width: 200 }}
                    value={filter}
                    onChange={(value) => setFilter(value)}
                  >
                    <Option value="all">All products</Option>
                    <Option value="bestValue">Best value</Option>
                    <Option value="bestCamera">Best camera</Option>
                    <Option value="bestPerformance">Best performance</Option>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="data-table">
              <Table responsive="sm">
                <thead>
                  <tr>
                    <th>Model</th>
                    <th>Ram/Rom</th>
                    <th>Tag</th>
                    <th className="text-end">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((product, index) => (
                    <>
                      <tr>
                        <SingleProduct
                          product={product}
                          key={index}
                          getTags={getTags}
                        />
                      </tr>
                    </>
                  ))}
                 
                </tbody>
              </Table>
              {isLoading && (
                    <>
                      <div className="loader">
                        <div class="spinner-border text-primary" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    </>
                  )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
