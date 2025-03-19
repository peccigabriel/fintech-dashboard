import React from "react";
import { useDataContext } from "../contexts/DataContext";

const buttonStyle: React.CSSProperties = {
  padding: "var(--gap) var(--gap-s)",
  backgroundColor: "var(--color-3)",
  border: "none",
  borderRadius: "var(--gap)",
  color: "var(--color-2)",
  fontWeight: "600",
  textTransform: "capitalize",
};

const MonthButton = ({
  numberOfMonthsPassed,
}: {
  numberOfMonthsPassed: number;
}) => {
  const { setDateRange } = useDataContext();

  function handleMonthsInterval() {
    const date = new Date();
    date.setMonth(date.getMonth() + numberOfMonthsPassed);

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    setDateRange({
      initialDate: formatDate(firstDay),
      finalDate: formatDate(lastDay),
    });
  }

  return (
    <button style={buttonStyle} onClick={handleMonthsInterval}>
      {getMonthName(numberOfMonthsPassed)}
    </button>
  );
};

function getMonthName(numberOfMonthsPassed: number) {
  const date = new Date();
  date.setMonth(date.getMonth() + numberOfMonthsPassed);
  return date.toLocaleString("pt-BR", { month: "long" });
}

function formatDate(date: Date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
}

export default MonthButton;
