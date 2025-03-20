import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const lineData = [
  { month: "Jan", series1: 60, series2: 30 },
  { month: "Feb", series1: 90, series2: 60 },
  { month: "Mar", series1: 30, series2: 90 },
  { month: "Apr", series1: 120, series2: 30 },
  { month: "May", series1: 60, series2: 0 },
  { month: "Jun", series1: 0, series2: 30 },
  { month: "Jul", series1: 90, series2: 60 },
  { month: "Aug", series1: 30, series2: 90 },
  { month: "Sep", series1: 60, series2: 30 },
  { month: "Oct", series1: 60, series2: 30 },
  { month: "Nov", series1: 120, series2: 90 },
  { month: "Dec", series1: 120, series2: 60 },
];

const pieData = [
  { name: "A", value: 25, color: "#FFD700" }, // Yellow
  { name: "B", value: 25, color: "#2ECC71" }, // Green
  { name: "C", value: 25, color: "#E67E22" }, // Orange
  { name: "D", value: 25, color: "#2C3E50" }, // Dark Blue
];

const ChartSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {/* Line Chart */}
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h3 className="font-semibold text-lg mb-4">Line</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="series1" stroke="#E67E22" dot={{ r: 6 }} strokeWidth={2} />
            <Line type="monotone" dataKey="series2" stroke="#009ACD" dot={{ r: 6 }} strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h3 className="font-semibold text-lg mb-4">Pie</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={pieData} dataKey="value" cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={0}>
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartSection;
