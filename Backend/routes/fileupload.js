import express from 'express';
import { uploadFile, uploadMultipleFiles, upload } from '../controllers/fileupload.js';

const fileUploadRouter = express.Router();

// Route for single file upload
fileUploadRouter.post('/upload', upload.single('file'), uploadFile);

// Route for multiple file uploads
fileUploadRouter.post('/upload-multiple', upload.array('files', 10), uploadMultipleFiles);

export default fileUploadRouter;
