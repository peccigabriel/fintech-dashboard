import React from "react";
import useFetch from "../hooks/useFetch";

export interface ISalesData {
  id: string;
  nome: string;
  preco: number;
  status: "pago" | "processando" | "falha";
  pagamento: "boleto" | "cartao" | "pix";
  parcelas: number | null;
  data: string;
}

interface IDateRange {
  initialDate: string;
  finalDate: string;
}

interface IDataContext {
  data: ISalesData[] | null;
  loading: boolean;
  error: string | null;
  dateRange: IDateRange;
  setDateRange: React.Dispatch<React.SetStateAction<IDateRange>>;
}

const DataContext = React.createContext<IDataContext | null>(null);

const ENDPOINT = "https://data.origamid.dev/vendas/";

function getDate(days: number) {
  const date = new Date();
  date.setDate(date.getDate() - days);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
}

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const [dateRange, setDateRange] = React.useState({
    initialDate: getDate(30),
    finalDate: getDate(0),
  });

  const URL = `${ENDPOINT}?inicio=${dateRange.initialDate}&final=${dateRange.finalDate}`;

  const { data, loading, error } = useFetch<ISalesData[]>(URL);

  return (
    <DataContext.Provider
      value={{
        data,
        loading,
        error,
        dateRange,
        setDateRange,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = React.useContext(DataContext);

  if (!context) {
    throw new Error("useDataContext must be used within a DataContextProvider");
  }

  return context;
};
