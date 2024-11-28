"use client";
import * as React from "react";
import { LineChart } from "@mui/x-charts";

interface AppLineChartProps {
  data: { x: string; y: number }[];
}

export default function AppLineChart({ data = [] }: AppLineChartProps) {
  return (
    <LineChart
      series={[
        {
          data: data.map((item) => item.y),
        },
      ]}
      width={400}
      height={200}
    />
  );
}
