import React, { useEffect, useState } from "react";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const countItemsWithLink = (items, link) => {
  return items.filter((item) => item.seller_name === link).length;
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
  const bikroyCount = countItemsWithLink(data, "Bikroy");
  const totalCount = data.length;

  const darazPercent = (darazCount / totalCount) * 100;
  const pickabooPercent = (picabooCount / totalCount) * 100;
  const bikroyPercent = (bikroyCount / totalCount) * 100;

  const pieData = [
    { name: "Daraz", value: darazPercent  },
    { name: "Pickaboo", value: pickabooPercent },
    { name: "Bikroy", value: bikroyPercent }
  ];

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={pieData}
        cx={200}
        cy={200}
        labelLine={false}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {pieData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend />
      <Tooltip />
    </PieChart>
  );
};

export default ChartPie;
