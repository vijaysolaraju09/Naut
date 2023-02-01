import React, { useState } from "react";
import DataTable from "../../components/data-table/DataTable";
import DashboardIcon from "../../components/icons/DashboardIcon";
import Pagination from "../../components/pagination/Pagination";
import { Column } from "../../types/data-table";

export default function PurchaseCover() {
  const [filters, setFilters] = useState({
    selectedProduct: "defi",
  });

  const handleFilters = (name: string, value: string) => {
    setFilters((f) => ({ ...f, [name]: value }));
  };

  const productList = ["defi", "cefi", "funds"];

  const data = [
    {
      id: 1,
      name: "Gearbox one",
      owner: "owner gear",
      image: "",
      chains: "test",
      capacity: 300,
      security_rating: "A",
      wording: "test",
    },
    {
      id: 2,
      name: "Gearbox two",
      owner: "owner gear",
      image: "",
      chains: "test",
      capacity: 300,
      security_rating: "BB",
      wording: "test",
    },
    {
      id: 3,
      name: "Gearbox three",
      owner: "owner gear",
      image: "",
      chains: "test",
      capacity: 300,
      security_rating: "A",
      wording: "test",
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
      accessor: "chains",
      header: "Product",
    },
    {
      accessor: "monthly_cost",
      header: "Product",
    },
    {
      accessor: "capacity",
      header: "Product",
    },
    {
      accessor: "security_rating",
      header: "Product",
    },
    {
      accessor: "cover_wording",
      header: "Product",
    },
  ];

  return (
    <div className="p-4">
      <h1 className="mb-5">Buy Covers</h1>
      <div className="d-flex align-items-center justify-content-between mb-5">
        <div className="input-group" style={{ maxWidth: "300px" }}>
          <input
            type="search"
            className="form-control"
            placeholder="Search Product..."
          />
          <button className="btn btn-success" type="button">
            Search {`>`}
          </button>
        </div>
        <button className="btn btn-dark btn-lg rounded-pill">
          Connect Wallet {`>`}
        </button>
      </div>
      <div className="border border-success w-100 my-5"></div>
      <div className="d-flex align-items-center justify-content-between mb-5">
        <div className="bg-white rounded-2 px-4">
          <div className="d-flex align-items-stretch">
            <div className="d-flex align-items-center gap-4 py-4">
              {productList.map((product) => {
                return (
                  <button
                    className={`btn border border-light rounded-pill ${
                      filters.selectedProduct === product
                        ? "bg-success text-white"
                        : ""
                    }`}
                    onClick={() => handleFilters("selectedProduct", product)}
                    key={product}
                  >
                    DeFi
                  </button>
                );
              })}
            </div>
            <div className="border border-secondary mx-4"></div>
            <div className="py-4">
              <DashboardIcon />
            </div>
          </div>
        </div>
        <button className="btn btn-lg btn-success rounded-pill">
          View Cart {`>`}
        </button>
      </div>
      <div className="mb-4">
        <DataTable columns={columns} data={data} />
      </div>
      <div className="mb-5 d-flex justify-content-end">
        <Pagination total={23} />
      </div>
    </div>
  );
}
