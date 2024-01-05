import * as Yup from 'yup';

// Define your validation schemas for each step
const requisitionSchema = Yup.object().shape({
  requisitionTitle: Yup.string().required('Requisition title is required'),
  numberOfOpenings: Yup.number().min(1, 'Enter a valid number').required('Number of openings is required'),
  gender: Yup.string().required('Gender is required'),
  urgency: Yup.string().required('Urgency is required'),
});

const jobDetailsSchema = Yup.object().shape({
  jobTitle: Yup.string().required('Job title is required'),
  jobDetails: Yup.string().required('Job details are required'),
  jobLocation: Yup.string().required('Job location is required'),
});

const interviewSettingsSchema = Yup.object().shape({
  interviewMode: Yup.string().required('Interview mode is required'),
  interviewDuration: Yup.string().required('Interview duration is required'),
  language: Yup.string().required('Language is required'),
});

// Define an array of validation schemas
export const validationSchemas = [requisitionSchema, jobDetailsSchema, interviewSettingsSchema];