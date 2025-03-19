import { ISalesData } from "../contexts/DataContext";

type SaleByDay = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
};

function datesWithoutYear(dates: SaleByDay[]) {
  return dates.map((day) => ({
    ...day,
    data: day.data.substring(5),
  }));
}

export function transformGraphData(data: ISalesData[]): SaleByDay[] {
  const days = data.reduce((acc: { [key: string]: SaleByDay }, item) => {
    const date = item.data.split(" ")[0];
    if (!acc[date]) {
      acc[date] = {
        data: date,
        pago: 0,
        processando: 0,
        falha: 0,
      };
    }

    acc[date][item.status] += item.preco;
    return acc;
  }, {});

  const formatedData = datesWithoutYear(Object.values(days));

  return formatedData;
}
