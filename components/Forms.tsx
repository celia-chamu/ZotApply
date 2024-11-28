"use client";

import { createJobs } from "../lib/action";
import { useRef } from "react";
import SubmitButton from "./SubmitButton";

export default function Forms() {
// we are using useRef to reset the form after submission
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={ref}
      action={async (FormData) => {
        ref.current?.reset();
        await createJobs(FormData);
      }}
      className="flex flex-col"
    >
      <h2 className="text-center text-green-400 font-bold">Add Job</h2>
      <label htmlFor="job" className="py-2">
        Title
      </label>
      <input type="text" name="job" className="mb-2  w-62 h-10 p-2" />
      <label htmlFor="jobCompany" className="py-2">
        Company
      </label>
      <input type="text" name="jobCompany" className=" w-62 h-10 p-2" />
      <label htmlFor="jobLocation" className="py-2">
        Location
      </label>
      <input type="text" name="jobLocation" className=" w-62 h-10 p-2" />
      <label htmlFor="jobType" className="py-2">
        Type
      </label>
      <select name="jobType">
        <option value="internship">Internship</option>
        <option value="full-time">Full-time</option>
      </select>
      <label htmlFor="jobApplicationStatus" className="py-2">
        Status
      </label>
      <select name="jobApplicationStatus">
        <option value="applied">Applied</option>
        <option value="screening">Screening</option>
        <option value="interview">Interview</option>
        <option value="rejected">Rejected</option>
        <option value="offer">Offer</option>
      </select>
      <SubmitButton />
    </form>
  );
}