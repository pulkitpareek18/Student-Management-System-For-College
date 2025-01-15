import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { Student } from '../models/student.js';

// Configure Multer Storage Engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = './uploads';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const fileExt = path.extname(file.originalname);
    cb(null, uniqueSuffix + fileExt);
  },
});

// Multer Instance
export const upload = multer({ storage: storage });

// Controller for Single File Upload
export const uploadFile = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).send({ error: 'Student email is required.' });
    }

    if (!req.file) {
      return res.status(400).send({ error: 'No file uploaded.' });
    }

    const student = await Student.findOne({ email });

    if (!student) {
      return res.status(404).send({ error: 'Student not found. Please save student data first before uploading files.' });
    }

    student.files.push(req.file.filename);
    await student.save();

    res.send({
      message: 'File uploaded successfully!',
      filename: req.file.filename,
      student,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'An error occurred during the upload process.' });
  }
};

// Controller for Multiple File Uploads
export const uploadMultipleFiles = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).send({ error: 'Student email is required.' });
    }

    if (!req.files || req.files.length === 0) {
      return res.status(400).send({ error: 'No files uploaded.' });
    }

    // Try to find the student by email
    const student = await Student.findOne({ email });

    if (!student) {
      return res.status(404).send({ error: 'Student not found. Please save student data first before uploading files.' });
    }

    // If student exists, add the uploaded files to the student's files array
    const filenames = req.files.map(file => file.filename);
    student.files.push(...filenames);
    await student.save();

    res.json({
      message: 'Files uploaded successfully!',
      filenames,
      student,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'An error occurred during the upload process.' });
  }
};
