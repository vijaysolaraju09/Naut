import React from "react";
import { Outlet } from "react-router-dom";
import DashboardIcon from "../../icons/DashboardIcon";

export default function Header() {
  return (
    <>
      <div
        className="d-flex align-items-center justify-content-between p-4 bg-success w-100 position-fixed top-0 start-0 text-white"
        style={{ zIndex: 100 }}
      >
        <h2>Brand</h2>
        <div className="d-flex align-items-center">
          <div className="me-4">
            <DashboardIcon />
          </div>
          <div className="d-flex">
            <div className="me-2">name name</div>
            <DashboardIcon />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "100px" }}>
        <Outlet />
      </div>
    </>
  );
}
