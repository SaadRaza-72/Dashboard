import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data1 = [
  { year: "2001", value: 80 },
  { year: "2002", value: 40 },
  { year: "2003", value: 55 },
  { year: "2004", value: 20 },
  { year: "2005", value: 45 },
  { year: "2006", value: 25 },
  { year: "2007", value: 80 },
];

const data2 = [
  { year: "06", income: 400, expenses: 100 },
  { year: "07", income: 600, expenses: 800 },
  { year: "08", income: 800, expenses: 200 },
  { year: "09", income: 200, expenses: 100 },
  { year: "10", income: 600, expenses: 200 },
];

const BarChartSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* First Bar Chart */}
      <div className="bg-white p-4 shadow-lg rounded-lg">
        <h3 className="font-semibold text-lg mb-4">Bar Chart</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data1}>
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#EB7E5D" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Second Bar Chart */}
      <div className="bg-white p-4 shadow-lg rounded-lg">
        <h3 className="font-semibold text-lg mb-4">Bar Chart</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data2}>
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="income" fill="#EB7E5D" name="Income" />
            <Bar dataKey="expenses" fill="#B84CF5" name="Expenses" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartSection;
