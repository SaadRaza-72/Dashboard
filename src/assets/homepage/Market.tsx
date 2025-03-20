import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { PieChart, Pie, Cell } from "recharts";

const marketData = [
  { week: "Week 01", value1: 200, value2: 400 },
  { week: "Week 02", value1: 350, value2: 300 },
  { week: "Week 03", value1: 300, value2: 450 },
  { week: "Week 04", value1: 450, value2: 350 },
  { week: "Week 05", value1: 250, value2: 500 },
  { week: "Week 06", value1: 400, value2: 250 },
  { week: "Week 07", value1: 320, value2: 450 },
  { week: "Week 08", value1: 460, value2: 300 },
  { week: "Week 09", value1: 300, value2: 380 },
  { week: "Week 10", value1: 400, value2: 250 },
];

const statisticsData = [
  { name: "Income (66%)", value: 66, color: "#FF8C42" },
  { name: "Income (50%)", value: 50, color: "#3CB371" },
  { name: "Income (11%)", value: 11, color: "#4169E1" },
  { name: "Income (23%)", value: 23, color: "#7B68EE" },
];

const market: React.FC = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Market Overview (2x Size) */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-black">Market Overview</h2>
          <p className="text-gray-500 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur</p>

          {/* Chart */}
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={marketData}>
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value1" stroke="#ff8c42" fill="#ff8c42" strokeWidth={2} />
              <Line type="monotone" dataKey="value2" stroke="#3CB371" fill="#3CB371" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Current Statistic */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-black">Current Statistic</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={statisticsData} dataKey="value" cx="50%" cy="50%" innerRadius={50} outerRadius={80} fill="#8884d8">
                {statisticsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Legend */}
          <div className="mt-4 space-y-2">
            {statisticsData.map((stat, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="flex items-center space-x-2">
                  <span className={`w-3 h-3 rounded-full`} style={{ backgroundColor: stat.color }}></span>
                  <span className="text-gray-700">{stat.name}</span>
                </span>
                <span className="font-semibold text-black">${(stat.value * 2500).toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default market;
