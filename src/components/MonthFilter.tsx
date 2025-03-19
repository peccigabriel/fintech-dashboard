import React from "react";
import MonthButton from "./MonthButton";

const MonthFilter = () => {
  return (
    <div className="flex">
      <MonthButton numberOfMonthsPassed={-2} />
      <MonthButton numberOfMonthsPassed={-1} />
      <MonthButton numberOfMonthsPassed={0} />
    </div>
  );
};

export default MonthFilter;
