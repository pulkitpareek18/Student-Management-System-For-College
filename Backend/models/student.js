import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  email: { type: String, unique: true, required: true },
  phone: { type: Number },
  rollNo: { type: String, required: true },
  father: {
    name: { type: String, required: true },
    email: { type: String },
    phone: { type: Number },
  },
  mother: {
    name: { type: String, required: true },
    email: { type: String },
    phone: { type: Number },
  },
  academics: {
    class10th: {
      schoolName: { type: String, required: true },
      percentage: { type: Number, required: true },
      passoutYear: { type: Number, required: true },
    },
    class12th: {
      schoolName: { type: String, required: true },
      percentage: { type: Number, required: true },
      passoutYear: { type: Number, required: true },
    },
  },
  gender: { type: String, required: true },
  branch: { type: String, required: true },
  semester: { type: Number, required: true },
  batch: { type: String, required: true },
  dropout: { type: Boolean, default: false },
  remarks: { type: String },
  files: { type: [String] }, // Array to store uploaded file names
});

// Use existing model if it exists, or define a new one
export const Student = mongoose.models.Student || mongoose.model('Student', studentSchema);
