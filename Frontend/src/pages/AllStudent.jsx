import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'datatables.net'; // DataTables JS import
import { Link } from 'react-router-dom';
import "../styles/allStudents.css";

const AllStudent = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedStudents, setSelectedStudents] = useState(new Set());
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v1/students');
        if (!response.ok) {
          throw new Error('Failed to fetch students');
        }
        const data = await response.json();
        setStudents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  useEffect(() => {
    if (students.length > 0) {
      $('#dataTable').DataTable(); // Initialize DataTable after students are loaded
    }
  }, [students]);

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    setSelectAll(checked);
    if (checked) {
      const allStudentIds = new Set(students.map(student => student._id));
      setSelectedStudents(allStudentIds);
    } else {
      setSelectedStudents(new Set());
    }
  };

  const handleSelectStudent = (studentId) => {
    const updatedSelection = new Set(selectedStudents);
    if (updatedSelection.has(studentId)) {
      updatedSelection.delete(studentId);
    } else {
      updatedSelection.add(studentId);
    }
    setSelectedStudents(updatedSelection);
    setSelectAll(updatedSelection.size === students.length);
  };

  const handleDelete = async (email) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this student?");
    if (confirmDelete) {
      try {
        const response = await fetch(`http://localhost:3000/api/v1/students?email=${encodeURIComponent(email)}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Failed to delete student');
        }
        // Filter out the deleted student from the state
        setStudents(students.filter(student => student.email !== email));
      } catch (err) {
        setError(err.message);
      }
    }
  };

  if (loading) {
    return <div className="text-center text-gray-200">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="overflow-x-auto px-7 mx-auto bg-gray-800 h-screen w-full">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-200 pt-10">Student List</h1>
      <table id="dataTable" className="min-w-full bg-gray-700 border border-gray-600 shadow-lg rounded-lg overflow-hidden">
        <thead className="bg-gray-900 text-white">
          <tr>
            <th className="py-3 px-4 border-b border-gray-600">
              <input 
                type="checkbox" 
                checked={selectAll} 
                onChange={handleSelectAll} 
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" 
              />
            </th>
            <th className="py-3 px-4 border-b border-gray-600">Roll No.</th>
            <th className="py-3 px-4 border-b border-gray-600">Branch</th>
            <th className="py-3 px-4 border-b border-gray-600">Semester</th>
            <th className="py-3 px-4 border-b border-gray-600">Name</th>
            <th className="py-3 px-4 border-b border-gray-600">DOB</th>
            <th className="py-3 px-4 border-b border-gray-600">Email</th>
            <th className="py-3 px-4 border-b border-gray-600">Phone</th>
            <th className="py-3 px-4 border-b border-gray-600">Father's Name</th>
            <th className="py-3 px-4 border-b border-gray-600">Mother's Name</th>
            <th className="py-3 px-4 border-b border-gray-600">Options</th>
          </tr>
        </thead>
        <tbody className="bg-gray-700">
          {students.map((student) => (
            <tr key={student._id} className="text-gray-200 hover:bg-gray-600 transition duration-200">
              <td className="py-3 px-4 border-b border-gray-600">
                <input 
                  type="checkbox" 
                  checked={selectedStudents.has(student._id)} 
                  onChange={() => handleSelectStudent(student._id)} 
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" 
                />
              </td>
              <td className="py-3 px-4 border-b border-gray-600">{student.rollNo}</td>
              <td className="py-3 px-4 border-b border-gray-600">{student.branch}</td>
              <td className="py-3 px-4 border-b border-gray-600">{student.semester}</td>
              <td className="py-3 px-4 border-b border-gray-600">{student.name}</td>
              <td className="py-3 px-4 border-b border-gray-600">{new Date(student.dob).toLocaleDateString('en-GB')}</td>
              <td className="py-3 px-4 border-b border-gray-600">{student.email}</td>
              <td className="py-3 px-4 border-b border-gray-600">{student.phone}</td>
              <td className="py-3 px-4 border-b border-gray-600">{student.father.name}</td>
              <td className="py-3 px-4 border-b border-gray-600">{student.mother.name}</td>
              <td className="py-3 px-4 border-b border-gray-600">
                <Link to={`/studentInfo/${student.email}`} className="text-blue-600 hover:text-blue-400">View</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to={`/updateStudent/${student.email}`} className="text-blue-600 hover:text-blue-400">Edit</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={() => handleDelete(student.email)} className="text-red-400 hover:text-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllStudent;
