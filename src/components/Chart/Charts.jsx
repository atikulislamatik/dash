import React from "react";
import BarCharts from "./BarCharts";

import ChartPie from "./ChartPie";

const Charts = () => {
  return (
    <div>
      <section className="main-chart-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <div className="title">
                <h3>Sources</h3>
              </div>
              <ChartPie />
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="title">
                <h3>Conditions</h3>
              </div>
              <BarCharts />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Charts;
