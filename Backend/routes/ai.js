import express from "express";
import {profileAnalysis} from '../controllers/ai/profileAnalysis.js';
const aiRouter = express.Router();

// Route for single file upload
aiRouter.post('/profile/', profileAnalysis);

export default aiRouter;