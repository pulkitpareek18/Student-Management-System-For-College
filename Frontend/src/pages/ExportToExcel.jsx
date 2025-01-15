import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';

const ExportToExcel = () => {
  const [students, setStudents] = useState([]);

  // Fetch all students from the backend
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v1/students'); // Update with your actual endpoint
        if (response.ok) {
          const data = await response.json();
          console.log('Fetched students:', data); // Log the fetched data for debugging
          setStudents(data); // Adjust according to your response structure
        } else {
          console.error('Failed to fetch students:', response.statusText);
        }
      } catch (err) {
        console.error('Error fetching students:', err);
      }
    };

    fetchStudents();
  }, []);

  // Function to flatten and transform student data for export
  const flattenStudentData = (student) => {
    return {
      name: student.name,
      email: student.email,
      phone: student.phone,
      rollNo: student.rollNo,
      dob: student.dob,
      batch: student.batch,
      branch: student.branch,
      semester: student.semester,
      dropout: student.dropout,
      remarks: student.remarks,
      fatherName: student.father?.name,
      fatherEmail: student.father?.email,
      fatherPhone: student.father?.phone,
      motherName: student.mother?.name,
      motherEmail: student.mother?.email,
      motherPhone: student.mother?.phone,
      class10SchoolName: student.academics?.class10th?.schoolName,
      class10Percentage: student.academics?.class10th?.percentage,
      class10PassoutYear: student.academics?.class10th?.passoutYear,
      class12SchoolName: student.academics?.class12th?.schoolName,
      class12Percentage: student.academics?.class12th?.percentage,
      class12PassoutYear: student.academics?.class12th?.passoutYear,
    };
  };

  // Function to export data to Excel
  const handleExport = () => {
    if (students.length === 0) {
      alert('No student data available to export.');
      return;
    }

    // Flatten the students' data
    const flattenedStudents = students.map(flattenStudentData);

    // Create a worksheet from the flattened data
    const ws = XLSX.utils.json_to_sheet(flattenedStudents);

    // Add title case headers
    const headers = Object.keys(flattenedStudents[0]).map(header =>
      header.replace(/([a-z])([A-Z])/g, '$1 $2') // Add spaces between camel case words
        .replace(/\b\w/g, (char) => char.toUpperCase()) // Convert to title case
    );
    
    // Insert the headers as the first row
    XLSX.utils.sheet_add_aoa(ws, [headers], { origin: 'A1' });

    // Apply styling: Bold headers, center all entries
    const range = XLSX.utils.decode_range(ws['!ref']); // Get the range of the sheet
    for (let row = range.s.r; row <= range.e.r; row++) {
      for (let col = range.s.c; col <= range.e.c; col++) {
        const cell = ws[XLSX.utils.encode_cell({ r: row, c: col })];
        if (row === 0) {
          // Make headers bold
          if (!cell) ws[XLSX.utils.encode_cell({ r: row, c: col })] = {};
          ws[XLSX.utils.encode_cell({ r: row, c: col })].s = { font: { bold: true } };
        }
        // Center all cells
        if (!cell) ws[XLSX.utils.encode_cell({ r: row, c: col })] = {};
        ws[XLSX.utils.encode_cell({ r: row, c: col })].s = {
          alignment: { horizontal: 'center', vertical: 'center' },
        };
      }
    }

    // Create a new workbook and append the worksheet
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Students');

    // Generate the Excel file and prompt download
    XLSX.writeFile(wb, 'students.xlsx');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-sm w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Export Students Data</h1>
        <p className="text-lg text-gray-600 mb-6">
          Click the button below to export all student data to an Excel file.
        </p>
        <button
          className="bg-green-500 text-white py-2 px-6 rounded-lg text-lg font-semibold transition-colors duration-200 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          onClick={handleExport}
        >
          Export to Excel
        </button>
      </div>
    </div>
  );
};

export default ExportToExcel;
