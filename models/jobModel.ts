// Importing mongoose library along with Document and Model types from it
import mongoose, { Document, Model } from "mongoose";

// Defining the structure of a job item using TypeScript interfaces
export interface IJob {
  job: string;
  jobCompany: string;
  jobLocation: string;
  jobType: 'internship' | 'full-time';
  jobApplicationStatus: 'applied' | 'screening' | 'interview' | 'offer' | 'rejected';
  jobDescription?: string; 
}

// Merging IJob interface with mongoose's Document interface to create 
// a new interface that represents a job document in MongoDB
export interface IJobDocument extends IJob, Document {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

// Defining a mongoose schema for the job document, specifying the types 
// and constraints
const JobSchema = new mongoose.Schema<IJobDocument>(
  {
    job: {
      type: String,
      required: true,
    },
    jobCompany: {
      type: String,
      required: true,
    },
    jobLocation: {
      type: String,
      required: false,
    },
    jobType: {
      type: String,
      enum: ['internship', 'full-time'],
      required: true,
    },
    jobApplicationStatus: {
      type: String,
      enum: ['applied', 'screening', 'interview', 'offer', 'rejected'],
      default: 'applied',
      required: true,
    },
    jobDescription: {
      type: String,
      required: false,
    }
  },
  {
    // Automatically add 'createdAt' and 'updatedAt' fields to the document
    timestamps: true,
  }
);

// Creating a mongoose model for the job document
const Job: Model<IJobDocument> =
  mongoose.models?.Job || mongoose.model("Job", JobSchema);

export default Job;