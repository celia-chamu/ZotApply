import mongoose, { Schema, Document } from 'mongoose';

// Define the schema for the Job model
interface IJob extends Document {
  title: string;
  company: string;
  description?: string;
  location?: string;
  applicationStatus: 'applied' | 'interviewing' | 'rejected' | 'offer';
  dateApplied: Date;
  user: mongoose.Schema.Types.ObjectId; // Reference to the user who applied
}

// Define the schema structure
const jobSchema: Schema<IJob> = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    location: {
      type: String,
      required: false,
    },
    applicationStatus: {
      type: String,
      enum: ['applied', 'interviewing', 'offer', 'rejected', 'hired'],
      default: 'applied', // default to 'applied'
      required: true,
    },
    dateApplied: {
      type: Date,
      default: Date.now, // set the default to current time
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model
      required: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Create and export the Job model
const Job = mongoose.model<IJob>('Job', jobSchema);

export default Job;
