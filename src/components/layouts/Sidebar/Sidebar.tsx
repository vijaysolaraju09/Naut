import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import DashboardIcon from "../../icons/DashboardIcon";

export default function Sidebar() {
  const sidenavLinks = [
    {
      icon: <DashboardIcon />,
      label: "Dashboard",
      to: "/dashboard",
    },
    {
      icon: <DashboardIcon />,
      label: "Purchase Cover",
      to: "/purchase-cover",
    },
    {
      icon: <DashboardIcon />,
      label: "My Covers",
      to: "/my-covers",
    },
    {
      icon: <DashboardIcon />,
      label: "My Claims",
      to: "/my-claims",
    },
  ];

  return (
    <>
      <div
        className="position-fixed start-0 p-4 bg-white"
        style={{
          borderRadius: "0 20px 0 0",
          width: "150px",
          top: "200px",
        }}
      >
        <ul className="ps-0" style={{ listStyle: "none" }}>
          {sidenavLinks.map((link) => {
            return (
              <li className="text-center mb-4" key={link.label}>
                <NavLink
                  to={link.to}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div>{link.icon}</div>
                  <div>{link.label}</div>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div style={{ marginLeft: "162px" }}>
        <Outlet />
      </div>
    </>
  );
}
