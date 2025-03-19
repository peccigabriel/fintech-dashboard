import React from "react";
import { useLocation } from "react-router-dom";
import DateRange from "./DateRange";
import MonthFilter from "./MonthFilter";

function Header() {
  const location = useLocation();

  const titles: Record<string, string> = {
    "/": "Resumo",
    "/sales": "Vendas",
  };

  return (
    <header className="mb">
      <div className="mb daterange">
        <DateRange />
        <h1 className="box bg-3">{titles[location?.pathname]}</h1>
      </div>
      <MonthFilter />
    </header>
  );
}

export default Header;
