import React from "react";
import TimeChart from "../../components/time-chart/TimeChart";
import AssetAllocation from "./AssetAllocation/AssetAllocation";
import CoverDetails from "./CoverDetails/CoverDetails";
import DashboardStats from "./DashboardStats/DashboardStats";

export default function Dashboard() {
  return (
    <div className="p-4">
      <div className="d-flex">
        <div
          className="me-4 bg-white rounded-2 p-4 position-sticky"
          style={{ top: "124px", height: "max-content" }}
        >
          <h1 className="mb-4">Dashboard</h1>
          <DashboardStats />
        </div>
        <div className="flex-grow-1">
          <div className="mb-5 bg-white rounded-2 p-4 d-flex align-items-stretch">
            <div className="flex-grow-1">
              <div className="mb-2 text-center">
                <div className="fs-6">Expired Covers</div>
                <div className="fs-5 fw-bold">100</div>
              </div>
              <button className="btn btn-danger rounded-pill w-100">
                Renew Now {`>`}
              </button>
            </div>
            <div className="border border-secondary mx-5"></div>
            <div className="flex-grow-1">
              <div className="mb-2 text-center">
                <div className="fs-6">Cover Renewals</div>
                <div className="fs-5 fw-bold">100</div>
              </div>
              <button className="btn btn-success rounded-pill w-100">
                Renew Now {`>`}
              </button>
            </div>
          </div>
          <div className="mb-5 bg-white rounded-2 p-4">
            <TimeChart />
          </div>
          <div className="mb-5">
            <AssetAllocation />
          </div>
          <div className="mb-5">
            <CoverDetails />
          </div>
        </div>
      </div>
    </div>
  );
}
