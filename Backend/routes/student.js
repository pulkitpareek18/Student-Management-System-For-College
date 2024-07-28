import express from "express";
import { createStudent } from "../controllers/student.js";

const studentRouter = express.Router();

studentRouter.get("/", (req, res) => {
  res.send("Hello Student!");
});

studentRouter.put("/", createStudent);

export default studentRouter;