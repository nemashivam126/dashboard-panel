import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
  Label,
} from "recharts";
import "./PieChart.css";

const data = [
  { name: "Customer A", value: 30 },
  { name: "Customer B", value: 30 },
  { name: "Customer C", value: 40 },
];

const COLORS = ["#EF4BA2", "#F1EFFC", "#5B35E9"];

const Piechart = () => {
  return (
    <div className="piechart">
      <h5>
        <b>Customers</b>
      </h5>
      <p className="custmbuy">Customers that buy products</p>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={null} // Hides the labels
            labelLine={null} // Hides the lines connecting labels to the pie
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
            <Label
              value="65%"
              position="centerBottom"
              style={{ fontSize: "24px", fontWeight: "bold" }}
              fill="black"
            />
            <Label
              value="Total new customers"
              position="centerTop"
              style={{ fontSize: "10px", fontWeight: "bold" }}
            />
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Piechart;
