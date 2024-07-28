import { Student } from "../models/Student.js";

export const createStudent = async (req, res) => {
    try {
        console.log(req.body);
        const student = new Student(req.body);
        await student.save();
        res.status(201).send(student);
    } 
    catch (e) {
        res.status(400).send(e);   
    }
}

export function updateStudent(req, res) {
    const studentId = req.params.id;
    const updates = req.body;

    // Find the student by ID and update it
    Student.findByIdAndUpdate(studentId, updates, { new: true, runValidators: true })
        .then(updatedStudent => {
            if (!updatedStudent) {
                return res.status(404).send({ error: 'Student not found' });
            }
            res.send({ message: 'Student updated successfully', student: updatedStudent });
        })
        .catch(error => res.status(400).send(error));
}