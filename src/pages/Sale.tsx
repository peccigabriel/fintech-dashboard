import { ISalesData } from "../contexts/DataContext";
import { useParams } from "react-router-dom";
import { formatCurrency } from "../services/formatCurrency";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";

type ISale = Omit<ISalesData, "data">;

const ENDPOINT = "https://data.origamid.dev/vendas/";

const Sale = () => {
  const { id } = useParams();

  const { data, loading } = useFetch<ISale>(`${ENDPOINT}${id}`);

  if (loading) return <Loading />;

  if (!data) return null;

  return (
    <div>
      <div className="box mb">ID: {data.id}</div>
      <div className="box mb">Nome: {data.nome}</div>
      <div className="box mb">Status: {data.status}</div>
      <div className="box mb">Forma de Pgto: {data.pagamento}</div>
      <div className="box mb">Preço: {formatCurrency(data.preco)}</div>
    </div>
  );
};

export default Sale;
