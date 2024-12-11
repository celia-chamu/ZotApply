"use client"

import { ColumnDef } from "@tanstack/react-table"
import { deleteJob } from "../../../lib/action";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react"


export type Job = {
  id: string;
  job: string;
  jobCompany: string;
  jobLocation: string;
  jobType: 'internship' | 'full-time';
  jobApplicationStatus: 'applied' | 'screening' | 'interview' | 'offer' | 'rejected';
  jobCreatedAt: string;
  jobDescription?: string; 
}

export const columns: ColumnDef<Job>[] = [
  {
    accessorKey: "job",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "jobCompany",
    header: "Company",
  },
  {
    accessorKey: "jobLocation",
    header: "Location",
  },
  {
    accessorKey: "jobType",
    header: "Type",
  },
  {
    accessorKey: "jobApplicationStatus",
    header: "Status",
  },
  {
    accessorKey: "jobCreatedAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "desc")}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    id: "actions",
    header: "",
    cell: ({ row }) => (
      <form action={deleteJob}>
        <input
          hidden
          type="text"
          name="id"
          defaultValue={row.original.id} // Pass the job ID
        />
        <button className="border rounded px-2 bg-red-400">
          Delete
        </button>
      </form>
    ),
  },
];
