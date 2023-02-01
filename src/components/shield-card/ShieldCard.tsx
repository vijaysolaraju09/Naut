import React from "react";

interface props {
  name: string;
  qty: number;
  color?: string;
}

export default function ShieldCard({
  name,
  qty,
  color = "bg-secondary-subtle",
}: props) {
  return (
    <div className={`text-center mb-4 p-2 rounded-2 ${color}`}>
      <div>{name}</div>
      <div>{qty}</div>
    </div>
  );
}
