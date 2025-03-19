import {
  ResponsiveContainer,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";
import { ISalesData } from "../contexts/DataContext";
import { transformGraphData } from "../services/transformGraphData";

const SalesGraph = ({ data }: { data: ISalesData[] }) => {
  const dataGraph = transformGraphData(data);

  return (
    <ResponsiveContainer height={400} width="99%">
      <LineChart data={dataGraph}>
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pago" stroke="#a36af9" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#fbcb21"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="falha"
          stroke="#000000"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesGraph;
