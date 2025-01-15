import { Student } from "../models/Student.js";

export const createStudent = async (req, res) => {
    try {
        console.log(req.body);
        const student = new Student(req.body);
        await student.save();
        res.status(201).send(student);
    } 
    catch (e) {
        if (e.name === 'ValidationError') {
            // Handle validation errors
            const errorMessages = Object.values(e.errors).map(err => err.message);
            res.status(400).send({
                error: 'Validation Error',
                messages: errorMessages,
            });
        } else if (e.code === 11000) { // Duplicate key error
            res.status(400).send({
                error: 'Duplicate Email',
                message: 'A student with this email already exists. Please use a different email.',
            });
        } else {
            // General error response
            res.status(500).send({
                error: 'Internal Server Error',
                message: 'An unexpected error occurred. Please try again later.',
            });
        }
    }
};

export function updateStudent(req, res) {
    const email = req.query.email;
    const updates = req.body;

    if (!email) {
        return res.status(400).send({ error: 'Email query parameter is required' });
    }

    // Find the student by email and update it
    Student.findOneAndUpdate({ email: email }, updates, { new: true, runValidators: true })
        .then(updatedStudent => {
            if (!updatedStudent) {
                return res.status(404).send({ error: 'Student not found' });
            }
            res.send({ message: 'Student updated successfully', student: updatedStudent });
        })
        .catch(error => res.status(400).send(error));
}


export function viewAllStudents(req, res) {
    Student.find({})
        .then(students => {
            res.send(students);
        })
        .catch(error => {
            res.status(500).send(error);
        });
}

export function getStudent(req, res) {
    const email = req.query.email; // Get the email from query parameters

    if (!email) {
        return res.status(400).send({ error: 'Email query parameter is required' });
    }

    Student.findOne({ email: email })
        .then(student => {
            if (!student) {
                return res.status(404).send({ error: 'Student not found' });
            }
            res.send(student);
        })
        .catch(error => {
            res.status(500).send({ error: 'Internal Server Error' });
        });
}

export function deleteStudent(req, res) {
    const email = req.query.email; // Get the email from query parameters

    if (!email) {
        return res.status(400).send({ error: 'Email query parameter is required' });
    }

    Student.findOneAndDelete({ email: email })
        .then(deletedStudent => {
            if (!deletedStudent) {
                return res.status(404).send({ error: 'Student not found' });
            }
            res.send({ message: 'Student deleted successfully', student: deletedStudent });
        })
        .catch(error => res.status(500).send({ error: 'Internal Server Error' }));
}