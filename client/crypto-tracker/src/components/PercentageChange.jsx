import React from "react";

function PercentageChange({ value }) {
  const color = value >= 0 ? "green" : "red";
  return <span style={{ color }}>{value}%</span>;
}

export default PercentageChange;
