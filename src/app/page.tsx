"use client";
import * as React from "react";
import AppTable from "./basicTable";
import AppChart from "./pieChart";
import AppLineChart from "./lineChart";

const dummydataPie = [
  { id: 0, value: 10, label: "Pending" },
  { id: 1, value: 15, label: "Rejected" },
  { id: 2, value: 20, label: "Uncomplete" },
  { id: 3, value: 20, label: "Interviews" },
  { id: 4, value: 20, label: "Offers" },
];

const dummydataTable = [
  {
    company: "Netflix",
    pay: "$120,000",
    role: "Software Engineer",
    date: "2024-10-01",
    status: "Applied",
  },
  {
    company: "Google",
    pay: "$140,000",
    role: "Product Manager",
    date: "2024-11-05",
    status: "Interview Scheduled",
  },
  {
    company: "Facebook",
    pay: "$135,000",
    role: "Data Scientist",
    date: "2024-09-15",
    status: "Offer Extended",
  },
  {
    company: "Amazon",
    pay: "$110,000",
    role: "Business Analyst",
    date: "2024-08-20",
    status: "Rejected",
  },
  {
    company: "Apple",
    pay: "$145,000",
    role: "UX Designer",
    date: "2024-11-10",
    status: "Applied",
  },
  {
    company: "Microsoft",
    pay: "$130,000",
    role: "Cloud Engineer",
    date: "2024-09-25",
    status: "Offer Extended",
  },
  {
    company: "Spotify",
    pay: "$115,000",
    role: "Marketing Specialist",
    date: "2024-10-15",
    status: "Interview Scheduled",
  },
  {
    company: "Uber",
    pay: "$125,000",
    role: "Operations Manager",
    date: "2024-07-30",
    status: "Rejected",
  },
];

const dummydataLine = [
  { x: "January", y: 3 },
  { x: "February", y: 5 },
  { x: "March", y: 7 },
  { x: "April", y: 6 },
  { x: "May", y: 8 },
  { x: "June", y: 10 },
  { x: "July", y: 9 },
  { x: "August", y: 12 },
  { x: "September", y: 15 },
  { x: "October", y: 14 },
  { x: "November", y: 18 },
];

export default function Home() {
  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-20
     sm:p-20 font-[family-name:var(--font-geist-sans)]"
    >
      <div className="w-full flex justify-between items-center bg-gray-800 rounded-md px-4 py-2"></div>
      <div className="grid grid-cols-4 gap-4 w-full">
        <div className="col-span-2 bg-gray-900 p-4 rounded-md">
          <AppTable data={dummydataTable} />
        </div>

        {/* Line Chart for Applications */}
        <div className="col-span-2 bg-gray-900 p-4 rounded-md">
          <h3 className="text-blue-300 text-sm font-bold mb-2">
            Application Progress
          </h3>
          <AppLineChart data={dummydataLine} />
        </div>

        {/* place holder calendar for google api Calendar */}
        <div className="bg-gray-900 p-4 rounded-md">
          <h3 className="text-blue-300 text-sm font-bold mb-2">Calendar</h3>
          <div className="grid grid-cols-7 text-center text-white text-sm">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
              <div key={day}>{day}</div>
            ))}
            {Array.from({ length: 30 }, (_, i) => (
              <div key={i} className="py-1">
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Pie Chart for Applications */}
        <div className="bg-gray-900 p-4 rounded-md">
          <h3 className="text-blue-300 text-sm font-bold mb-2">
            Application Status
          </h3>
          <AppChart data={dummydataPie} />
        </div>
      </div>
    </div>
  );
}