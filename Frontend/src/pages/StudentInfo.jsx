import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const StudentInfo = () => {
    const { email } = useParams(); // Get the email parameter from the URL
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [aiAnalysis, setAiAnalysis] = useState(null);

    useEffect(() => {
        const fetchStudentInfo = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/v1/students/profile?email=${email}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch student information');
                }
                const data = await response.json();
                setStudent(data); // Assuming the API returns a single student object
                
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchStudentInfo();
    }, [email]);


    useEffect(() => {
        const getAiAnalysis = async () => {
            if (!student) return; // Ensure student data is available before making the request
    
            try {
                const response = await fetch(`http://localhost:3000/api/v1/ai/profile`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ student }), // Send student data
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch AI analysis');
                }
                const data = await response.json();
                setAiAnalysis(data); // Update state with AI analysis data
            } catch (err) {
                setError(err.message);
            }
        };
    
        if (student) {
            getAiAnalysis(); // Only call when student is fully loaded
        }
    }, [student]); // Dependency on student
    


    if (loading) {
        return <div className="text-center text-white">Loading...</div>;
    }

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    // Ensure student data is available
    if (!student) {
        return <div className="text-red-500">No student data found.</div>;
    }

    return (
        <>
            <div className="mx-auto p-5 min-h-screen bg-gray-900 text-white">
                <h1 className="text-3xl font-bold mb-5">Student Profile</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {/* Personal Information Block */}
                    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-2">Personal Information :</h2>
                        <div className="flex flex-wrap">
                            <div className="w-full p-2"><strong>Name :</strong> {student.name}</div>
                            <div className="w-full p-2"><strong>Roll No :</strong> {student.rollNo}</div>
                            <div className="w-full p-2"><strong>Date of Birth :</strong> {new Date(student.dob).toLocaleDateString('en-GB', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric'
                            })}</div>
                            <div className="w-full p-2"><strong>Email :</strong> <a href={`mailto:${student.email}`} className="text-blue-400 hover:underline">{student.email}</a></div>
                            <div className="w-full p-2"><strong>Phone :</strong> {student.phone}</div>
                        </div>
                    </div>

                    {/* Parents Information Block */}
                    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-2">Parents Information :</h2>
                        <div className="flex flex-wrap">
                            <div className="w-full p-2"><strong>Father's Name :</strong> {student.father.name}</div>
                            <div className="w-full p-2"><strong>Email:</strong> <a href={`mailto:${student.father.email}`} className="text-blue-400 hover:underline">{student.father.email}</a></div>
                            <div className="w-full p-2"><strong>Phone:</strong> {student.father.phone}</div>
                            <div className="w-full p-2"><strong>Mother's Name :</strong> {student.mother.name}</div>
                            <div className="w-full p-2"><strong>Email:</strong> <a href={`mailto:${student.mother.email}`} className="text-blue-400 hover:underline">{student.mother.email}</a></div>
                            <div className="w-full p-2"><strong>Phone:</strong> {student.mother.phone}</div>
                        </div>
                    </div>

                    {/* Academic Information Block */}
                    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-2">Academic Information :</h2>
                        <div className="flex flex-wrap">
                            <div className="w-full p-2"><strong>10th Grade :</strong> {student.academics.class10th.schoolName}</div>
                            <div className="w-full p-2"><strong>Percentage :</strong> {student.academics.class10th.percentage}%</div>
                            <div className="w-full p-2"><strong>12th Grade :</strong> {student.academics.class12th.schoolName}</div>
                            <div className="w-full p-2"><strong>Percentage :</strong> {student.academics.class12th.percentage}%</div>
                            <div className="w-full p-2"><strong>Passout Year :</strong> {student.academics.class12th.passoutYear}</div>
                        </div>
                    </div>

                    {/* College Information */}
                    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-2">College Information :</h2>
                        <div className="flex flex-wrap">
                            <div className="w-full p-2"><strong>Roll Number :</strong> {student.rollNo}</div>
                            <div className="w-full p-2"><strong>Year / Semester :</strong> {student.semester}</div>
                            <div className="w-full p-2"><strong>Branch :</strong> {student.branch}</div>
                            <div className="w-full p-2"><strong>Batch :</strong> {student.batch}</div>
                            <div className="w-full p-2"><strong>Remarks :</strong> {student.remarks}</div>
                            <div className="w-full p-2"><strong>Dropout :</strong> {student.dropout ? 'Yes' : 'No'}</div>                        
                        </div>
                    </div>
                </div>

                {/* Uploaded Documents */}
                    <h2 className="text-xl font-semibold mb-2">Uploaded Documents :</h2>
                   

                {/* AI Profile Analysis */}
                <div className="bg-gray-800 w-1/2 mt-4 ml-auto p-4 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-2">AI Profile Analysis</h2>
                        
                        {!aiAnalysis&&<DotLottieReact
                            src="https://lottie.host/31356eee-97ca-4e88-a6f8-e7092a44f31d/UnnYFPUkPu.lottie"
                            loop
                            autoplay
                        />}
                        <div>{<ReactMarkdown>{aiAnalysis}</ReactMarkdown>}</div>

                        
                    </div>
            </div>
        </>
    );
};

export default StudentInfo;