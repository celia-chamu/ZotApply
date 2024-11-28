import { deleteJob } from "../lib/action";
import Job from "../models/jobModel";
import React from "react";

export default async function GetJobs() {
  try {
    const jobs = await Job.find();
    if (jobs.length === 0) {
      return <h1 className="text-red-400 font-bold text-xl">You have no applied jobs.</h1>;
    } else {

      // Creating a new Date object from the given string
      return (
        <div className="w-72 mt-8">
          <h2 className="text-center text-green-400 font-bold mb-4">My Jobs</h2>
          {jobs.map((job) => (
            <div key={job._id} className="flex flex-col items-center gap-2 p-2 border-blue-400 border-2 rounded my-4">
              <div className="flex flex-col gap-2 justify-center items-center ">
                <h3>{job.job as string}</h3>
                <p>{job.jobCompany as string}</p>
                <p>{job.jobLocation as string}</p>
                <p>{job.jobApplicationStatus as string}</p>
                <p>{job.jobType as string}</p>
              </div>
              <form action={deleteJob}>
                <input
                  hidden
                  type="text"
                  name="id"
                  defaultValue={job._id.toString()}
                />
                <button className="border rounded px-2 bg-red-400">
                  delete
                </button>
              </form>
            </div>
          ))}
        </div>
      );
    }
  } catch (error) {
    console.log(error);
  }
}