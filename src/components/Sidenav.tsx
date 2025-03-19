import FintechSVG from "../assets/FintechSVG";
import SummaryIcon from "../assets/icons/resumo.svg";
import SalesIcon from "../assets/icons/vendas.svg";
import { NavLink } from "react-router-dom";

const Sidenav = () => {
  return (
    <nav className="sidenav box bg-3">
      <FintechSVG title="Fintech Logo" />
      <ul>
        <li>
          <span>
            <img src={SummaryIcon} alt="Resumo" />
          </span>
          <NavLink to="/">Resumo</NavLink>
        </li>
        <li>
          <span>
            <img src={SalesIcon} alt="Vendas" />
          </span>
          <NavLink to="/sales">Vendas</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidenav;
