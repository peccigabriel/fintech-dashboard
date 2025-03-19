import React from "react";
import DateInput from "./DateInput";
import { useDataContext } from "../contexts/DataContext";

const DateRange = () => {
  const { dateRange, setDateRange } = useDataContext();

  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      <DateInput
        label="Inicio"
        value={dateRange.initialDate}
        onChange={({ target }) =>
          setDateRange((prev) => ({ ...prev, initialDate: target.value }))
        }
      />
      <DateInput
        label="Final"
        value={dateRange.finalDate}
        onChange={({ target }) =>
          setDateRange((prev) => ({ ...prev, finalDate: target.value }))
        }
      />
    </form>
  );
};

export default DateRange;
