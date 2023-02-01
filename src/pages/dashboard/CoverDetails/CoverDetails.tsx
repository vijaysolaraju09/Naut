import React, { useState } from "react";
import DataTable from "../../../components/data-table/DataTable";
import DashboardIcon from "../../../components/icons/DashboardIcon";
import { Action, Column } from "../../../types/data-table";

export default function CoverDetails() {
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
      uninsured: 75,
      value: 300,
      covered_value: 297,
    },
    {
      id: 2,
      name: "Gearbox two",
      owner: "owner gear",
      image: "",
      uninsured: 60,
      value: 300,
      covered_value: 297,
    },
    {
      id: 3,
      name: "Gearbox three",
      owner: "owner gear",
      image: "",
      uninsured: 80,
      value: 300,
      covered_value: 297,
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
      accessor: "value",
      header: "Value",
    },
    {
      accessor: "covered_value",
      header: "Covered Value",
    },
    {
      accessor: "uninsured",
      header: "Uninsured %",
    },
  ];

  const actions: Action[] = [
    {
      name: "Buy Cover",
      content: "BUY COVER",
      action: (row) => {
        console.log(row);
      },
    },
  ];

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between mb-5">
        <h1>Cover Details</h1>
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
        <DataTable columns={columns} data={data} actions={actions} />
      </div>
    </div>
  );
}
