'use server';
import Job from "../models/jobModel";
import { revalidatePath } from "next/cache";
import { connectToMongoDB } from "./mongodb";

export const createJobs = async (formData: FormData) => {
    await connectToMongoDB();
    // Extracting job content and time from formData
    const job = formData.get("job");
    const jobCompany = formData.get("jobCompany");
    const jobLocation = formData.get("jobLocation");
    const jobType = formData.get("jobType");
    const jobApplicationStatus = formData.get("jobApplicationStatus");
    try {
        // Creating a new job using job model
        const newJob = await Job.create({
            job,
            jobCompany,
            jobLocation,
            jobType,
            jobApplicationStatus,
        });
        // Saving the new job
        newJob.save();
        // Triggering revalidation of the specified path ("/")
        revalidatePath("/");
        // Returning the string representation of the new job
        return newJob.toString();
    } catch (error) {
        console.log(error);
        return {message: 'error creating job'};
    }
};

export const deleteJob = async (id: FormData) => {
    // Extracting job ID from formData
    const jobId = id.get("id");
    try {
        // Deleting the job with the specified ID
        await Job.deleteOne({_id: jobId});
        // Triggering revalidation of the specified path ("/")
        revalidatePath("/");
        // Returning a success message after deleting the job
    } catch (error) {
        // Returning an error message if job deletion fails
    }
}