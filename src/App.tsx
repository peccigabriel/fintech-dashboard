import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataContextProvider } from "./contexts/DataContext";
import Summary from "./pages/Summary";
import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
import Sales from "./pages/Sales";
import Sale from "./pages/Sale";

function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className="container">
          <Sidenav />
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Summary />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/sales/:id" element={<Sale />} />
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  );
}

export default App;
