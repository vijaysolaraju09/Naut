import React from "react";
import ShieldCard from "../../../components/shield-card/ShieldCard";

export default function DashboardStats() {
  // fetch here
  const data = [
    {
      name: "Active Covers",
      qty: 1000,
      color: "bg-primary-subtle",
    },
    {
      name: "Active Claims",
      qty: 1000,
      color: "bg-success-subtle",
    },
    {
      name: "Pending Covers",
      qty: 1000,
      color: "bg-warning-subtle",
    },
    {
      name: "Pending Claims",
      qty: 1000,
      color: "bg-danger-subtle",
    },
  ];
  return (
    <>
      {data.map((stat) => {
        return (
          <ShieldCard
            key={stat.name}
            name={stat.name}
            qty={stat.qty}
            color={stat.color}
          />
        );
      })}
    </>
  );
}
