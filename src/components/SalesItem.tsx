import { ISalesData } from "../contexts/DataContext";
import { NavLink } from "react-router-dom";
import { formatCurrency } from "../services/formatCurrency";

const linkStyle = {
  fontFamily: "monospace",
};

const SalesItem = ({ sales }: { sales: ISalesData }) => {
  return (
    <div className="sales box">
      <NavLink style={linkStyle} to={`/sales/${sales.id}`}>
        {sales.id}
      </NavLink>
      <div>{sales.nome}</div>
      <div>{formatCurrency(sales.preco)}</div>
    </div>
  );
};

export default SalesItem;
