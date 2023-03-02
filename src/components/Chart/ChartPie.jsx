import React, { useEffect, useState } from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const COLORS = ["#84AF27", "#FFC239", "#0095A0"];

const countItemsWithLink = (items, link) => {
  return items.filter((item) => item.seller_name === link).length;
};

const countItemsWithLinks = (items, link) => {
  return items.filter((item) => item.ad_category === link).length;
};

const ChartPie = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const darazCount = countItemsWithLink(data, "Daraz");
  const picabooCount = countItemsWithLink(data, "Pickaboo");
  const bikroyCount = countItemsWithLinks(data, "Bikroy.com");
  const totalCount = data.length;

  const darazPercent = (darazCount / totalCount) * 100;
  const pickabooPercent = (picabooCount / totalCount) * 100;
  const bikroyPercent = (bikroyCount / totalCount) * 100;

  const pieData = [
    { name: "Daraz", value: darazPercent },
    { name: "Pickaboo", value: pickabooPercent },
    { name: "Bikroy", value: bikroyPercent },
  ];

  return (
    <>
   
      <ResponsiveContainer width="100%" height={400}>
        <PieChart width="100%" height={400}>
          <Pie
            data={pieData}
            cx={120}
            cy={200}
            labelLine={true}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend
            align="right"
            verticalAlign="middle"
            layout="vertical"
            formatter={(value) =>
              `${value} (${pieData
                .find((d) => d.name === value)
                .value.toFixed(0)}%)`
            }
          />

          <Tooltip formatter={(value) => `${value.toFixed(0)}%`} />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default ChartPie;
