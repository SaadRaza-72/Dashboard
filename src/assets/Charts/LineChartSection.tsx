import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Area } from "recharts";

const data1 = [
  { month: "Jan", recovered: 400, newPatients: 200 },
  { month: "Feb", recovered: 300, newPatients: 400 },
  { month: "Mar", recovered: 600, newPatients: 250 },
  { month: "Apr", recovered: 400, newPatients: 200 },
  { month: "May", recovered: 700, newPatients: 300 },
  { month: "Jun", recovered: 500, newPatients: 450 },
  { month: "Jul", recovered: 900, newPatients: 600 },
  { month: "Aug", recovered: 800, newPatients: 250 },
  { month: "Sep", recovered: 600, newPatients: 400 },
  { month: "Oct", recovered: 400, newPatients: 350 },
  { month: "Nov", recovered: 300, newPatients: 250 },
  { month: "Dec", recovered: 200, newPatients: 700 },
];

const data2 = [
  { month: "Jan", recovered: 20 },
  { month: "Feb", recovered: 40 },
  { month: "Mar", recovered: 20 },
  { month: "Apr", recovered: 80 },
  { month: "May", recovered: 40 },
  { month: "Jun", recovered: 40 },
  { month: "Jul", recovered: 60 },
  { month: "Aug", recovered: 80 },
  { month: "Sep", recovered: 40 },
  { month: "Oct", recovered: 20 },
  { month: "Nov", recovered: 120 },
  { month: "Dec", recovered: 60 },
];

const LineChartSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-7">
      {/* First Line Chart */}
      <div className="bg-white p-4 shadow-lg rounded-lg">
        <h3 className="font-semibold text-lg mb-4">Line</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data1}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="recovered" stroke="#EB7E5D" fill="#FCE4D6" />
            <Area type="monotone" dataKey="newPatients" stroke="#28A745" fill="#D4EDDA" />
            <Line type="monotone" dataKey="recovered" stroke="#EB7E5D" dot={{ r: 5 }} />
            <Line type="monotone" dataKey="newPatients" stroke="#28A745" dot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Second Line Chart */}
      <div className="bg-white p-4 shadow-lg rounded-lg">
        <h3 className="font-semibold text-lg mb-4">Line</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data2}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="recovered" stroke="#EB7E5D" fill="#FCE4D6" />
            <Line type="monotone" dataKey="recovered" stroke="#EB7E5D" dot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineChartSection;
