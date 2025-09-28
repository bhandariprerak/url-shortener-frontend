import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { format, parseISO } from "date-fns";

const Graph = ({ graphData }) => {
  const data = graphData && graphData.length > 0 ? graphData : [];

  const formatDate = (dateString) => {
    try {
      return format(parseISO(dateString), "MMM dd, yyyy");
    } catch {
      return dateString;
    }
  };

  return (
    <BarChart
      width={800}
      height={400}
      data={data}
      margin={{
        top: 80, // increased top margin for legend
        right: 30,
        left: 20,
        bottom: 5,
      }}
      barGap={20} // increased spacing between bars
      barCategoryGap="50%"
      className="w-full"
    >
      <CartesianGrid strokeDasharray="10 5 2 5" stroke="#e5e7eb"/>
      <XAxis
        dataKey="clickDate"
        tickFormatter={formatDate}
        label={{
          value: "Date",
          position: "insideBottom",
          offset: -5,
          fill: "#1f2937",
          fontWeight: "bold",
          fontSize: 16,
          fontFamily: "Inter, sans-serif",
        }}
      />
      <YAxis
        label={{
          value: "Number Of Clicks",
          angle: -90,
          position: "insideLeft",
          fill: "#1f2937",
          fontWeight: "bold",
          fontSize: 16,
          fontFamily: "Inter, sans-serif",
        }}
        allowDecimals={false}
      />
      <Tooltip />
      <Legend layout="horizontal" verticalAlign="top" align="center" />
      <Bar dataKey="count" name="Total Clicks" fill="#3b82f6" barSize={20} />
    </BarChart>
  );
};

export default Graph;