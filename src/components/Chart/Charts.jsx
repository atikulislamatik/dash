import React from 'react';
import BarCharts from './BarCharts';

import ChartPie from './ChartPie';

const Charts = () => {
    return (
        <div>
            <section className="main-chart-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                          <ChartPie/>
                        </div>
                        <div className="col-lg-7">
                           <BarCharts/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Charts;