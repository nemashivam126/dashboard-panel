import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "./components/sidebar/Sidebar";
import Bargraph from "./components/charts/bargraph/Bargraph";
import Piechart from "./components/charts/piechart/PieChart";
import Card from "./components/cards/Card";
import Table from "./components/react-table/Table";
import Navbar from "./components/navbar/Nav";

const root = ReactDOM.createRoot(document.getElementById("root"));
const data = [
  { productName: 'Abstract 3D', stock: '32 in stock', price: '$ 45.99', totalSales: 20, date: '2023-10-01' },
  { productName: 'Sarphens Illustrations', stock: '32 in stock', price: '$ 45.99', totalSales: 20, date: '2023-10-05' },
  { productName: 'Product C', stock: '40 in stock', price: '$ 85.99', totalSales: 40, date: '2023-09-28' },
];
root.render(
  <React.StrictMode>
    <div className="main-wrapper" style={{ background: "#F5F6F8" }}>
      <div className="p-0 left-main-wrapper">
        <Sidebar />
      </div>
      <div className="right-main-wrapper">
        <div><Navbar /></div>
        <div className="card-wrapper">
          <Card />
        </div>
        <div className="right-content">
          <div className="bar p-0">
            <Bargraph />
          </div>
          <div className="pie p-0">
            <Piechart />
          </div>
        </div>
        <div className="tableContent">
          <Table data={data} />
        </div>
      </div>
    </div>
  </React.StrictMode>
);

reportWebVitals();
