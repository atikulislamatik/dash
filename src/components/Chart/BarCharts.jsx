import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid, ResponsiveContainer, Tooltip,
  XAxis,
  YAxis
} from "recharts";

const BarCharts = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        const officialWarrantyCount = data.filter(
          (data) => data.official_warranty
        ).length;
        const unofficialWarrantyCount = data.filter(
          (data) => data.unofficial_warranty
        ).length;
        const usedPhoneCount = data.filter((data) => data.used_phone).length;
        const withoutWarrantyCount = data.filter(
          (data) => data.no_warranty
        ).length;

        setChartData([
          { name: "Official", item: officialWarrantyCount },
          { name: "Unofficial", item: unofficialWarrantyCount },
          { name: "Without warranty", item: withoutWarrantyCount },
          { name: "Used", item: usedPhoneCount },
        ]);
      });
  }, []);
  

  if (!chartData) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <ResponsiveContainer width="100%"height={400}>
        <BarChart
          width="100%"
          height={400}
          data={chartData}
          margin={{
            top: 5,
            right: 5,
            left: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" dy={10} />
          <YAxis dx={-20}  />
          <Tooltip cursor={{fill: 'transparent'}} />
          <Bar dataKey="item" fill="#0095A0" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default BarCharts;
