import { Student } from "../models/Student";

export const createStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).send(student);
    } 
    catch (e) {
        res.status(400).send(e);   
    }
}