"use client";
import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function AppChart({ data = [] as any[] }) {
  return (
    <PieChart
      slotProps={{
        legend: {
          hidden: true,
        },
      }}
      colors={["#1E3F66", "#2E5984", "#528AAE", "#73A5C6", "#91BAD6"]}
      series={[
        {
          type: "pie",
          arcLabel: (item) => `${item.value}%`,
          data: data,
          highlightScope: { fade: "global", highlight: "item" },
          faded: {
            innerRadius: 20,
            additionalRadius: -20,
            color: "gray",
          },
        },
      ]}
      tooltip={{ trigger: "item" }}
      width={400}
      height={200}
    />
  );
}
