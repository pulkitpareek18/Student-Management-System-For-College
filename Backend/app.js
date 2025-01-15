import express from 'express';
import studentRouter from './routes/student.js';
import fileUploadRouter from './routes/fileupload.js';
import cors from 'cors';
import aiRouter from './routes/ai.js';

export const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:5173' }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use("/api/v1/students", studentRouter);
app.use("/api/v1/upload",fileUploadRouter)
app.use("/api/v1/ai",aiRouter)