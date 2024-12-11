import Forms from "../../../components/Forms";
import GetJobs from "../../../components/getJobs";
import JobModel from "../../../models/jobModel";
import { Job, columns } from "./columns"
import { DataTable } from "./table"

async function getData(): Promise<Job[]> {
  // Fetch jobs from the database
  const jobs = await JobModel.find();

  // Transform the jobs into the desired structure
  return jobs.map(job => {
    // Format createdAt to 'YYYY-MM-DD' format
    const formattedCreatedAt = `${job.createdAt.getFullYear()}-${String(job.createdAt.getMonth() + 1).padStart(2, "0")}-${String(job.createdAt.getDate()).padStart(2, "0")}`;

    return {
      id: job._id.toString(), // Convert MongoDB ObjectId to string if needed
      job: job.job, // Assuming `title` is the field for the job title
      jobCompany: job.jobCompany, // Assuming `company` is the field for the company name
      jobLocation: job.jobLocation, // Assuming `location` is the field for the job location
      jobType: job.jobType, // Assuming `type` is the field for job type (e.g., "internship", "full-time")
      jobApplicationStatus: job.jobApplicationStatus, // Assuming `status` is the field for application status
      jobCreatedAt: formattedCreatedAt // Format the createdAt field
    };
  });
}


export default async function Applications() {
  const data = await getData()
  return (
    <div className="min-h-screen relative bg-slate-200">
      <div className="flex justify-around flex-col items-center h-1/2 ">
        <Forms/>
      </div>
      <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
    </div>
  );
}


