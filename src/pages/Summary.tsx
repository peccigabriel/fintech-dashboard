import { useDataContext } from "../contexts/DataContext";
import SalesGraph from "../components/SalesGraph";

function Summary() {
  const { data } = useDataContext();

  if (!data) return null;

  const calculateTotal = (statusFilter: string | null) => {
    return data
      .filter((item) =>
        statusFilter ? item.status === statusFilter : item.status !== "falha"
      )
      .reduce((acc, item) => acc + item.preco, 0)
      .toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
  };

  const summaryItems = [
    { title: "Vendas", value: calculateTotal(null) },
    { title: "Recebido", value: calculateTotal("pago") },
    { title: "Processando", value: calculateTotal("processando") },
  ];

  return (
    <section>
      <div className="resumo flex mb">
        {summaryItems.map(({ title, value }) => (
          <div className="box" key={title}>
            <h2>{title}</h2>
            <span>{value}</span>
          </div>
        ))}
      </div>
      <div className="box mb">
        <SalesGraph data={data} />
      </div>
    </section>
  );
}

export default Summary;
