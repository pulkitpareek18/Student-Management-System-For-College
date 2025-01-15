import express from "express";
import { createStudent, getStudent, updateStudent, viewAllStudents, deleteStudent } from "../controllers/student.js";

const studentRouter = express.Router();

studentRouter.get("/",viewAllStudents);

studentRouter.put("/", createStudent);

studentRouter.patch("/", updateStudent);

studentRouter.get("/profile", getStudent);

studentRouter.delete("/", deleteStudent);



export default studentRouter;