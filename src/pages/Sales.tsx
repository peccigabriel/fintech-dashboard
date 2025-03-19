import React from "react";
import { useDataContext } from "../contexts/DataContext";
import SalesItem from "../components/SalesItem";

const Sales = () => {
  const { data } = useDataContext();

  if (!data) return null;

  return (
    <ul>
      {data.map((venda) => (
        <li key={venda.id}>
          <SalesItem sales={venda} />
        </li>
      ))}
    </ul>
  );
};

export default Sales;
