import React, { useState } from "react";
import DataTable from "../../../components/data-table/DataTable";
import DashboardIcon from "../../../components/icons/DashboardIcon";
import { Column } from "../../../types/data-table";

export default function AssetAllocation() {
  const [filters, setFilters] = useState({
    selectedProduct: "defi",
  });

  const handleFilters = (name: string, value: string) => {
    setFilters((f) => ({ ...f, [name]: value }));
  };

  const data = [
    {
      id: 1,
      name: "Gearbox one",
      owner: "owner gear",
      image: "",
      price: 0.99,
      allocation: 75,
      amount: 300,
      value: 297,
    },
    {
      id: 2,
      name: "Gearbox two",
      owner: "owner gear",
      image: "",
      price: 0.99,
      allocation: 60,
      amount: 300,
      value: 297,
    },
    {
      id: 3,
      name: "Gearbox three",
      owner: "owner gear",
      image: "",
      price: 0.99,
      allocation: 80,
      amount: 300,
      value: 297,
    },
  ];

  const columns: Column[] = [
    {
      accessor: "name",
      header: "Product",
      formatDisplay: (row) => {
        return (
          <div>
            <div className="fs-4 fw-bold">{row.name}</div>
            <div className="fs-6 text-success">{row.owner}</div>
          </div>
        );
      },
    },
    {
      accessor: "price",
      header: "Price",
    },
    {
      accessor: "allocation",
      header: "Allocation",
      formatDisplay: (row) => {
        return (
          <div className="progress">
            <div
              className="progress-bar"
              style={{ width: `${row.allocation}%` }}
            ></div>
          </div>
        );
      },
    },
    {
      accessor: "amount",
      header: "Amount",
    },
    {
      accessor: "value",
      header: "Value",
    },
  ];

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between mb-5">
        <h1>Asset Allocation</h1>
        <div className="bg-white rounded-2 px-4">
          <div className="d-flex align-items-stretch">
            <div className="d-flex align-items-center gap-4 py-4">
              <button
                className={`btn border border-light rounded-pill ${
                  filters.selectedProduct === "defi"
                    ? "bg-success text-white"
                    : ""
                }`}
                onClick={() => handleFilters("selectedProduct", "defi")}
              >
                DeFi
              </button>
              <button
                className={`btn border border-light rounded-pill ${
                  filters.selectedProduct === "cefi"
                    ? "bg-success text-white"
                    : ""
                }`}
                onClick={() => handleFilters("selectedProduct", "cefi")}
              >
                CeFi
              </button>
              <button
                className={`btn border border-light rounded-pill ${
                  filters.selectedProduct === "funds"
                    ? "bg-success text-white"
                    : ""
                }`}
                onClick={() => handleFilters("selectedProduct", "funds")}
              >
                Funds
              </button>
            </div>
            <div className="border border-secondary mx-4"></div>
            <div className="py-4">
              <DashboardIcon />
            </div>
          </div>
        </div>
      </div>
      <div>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
