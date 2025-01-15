import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateStudent = () => {

    const email = useParams().email;

  // Generate the past 4 years and the next 4 years
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = currentYear - 4; i <= currentYear + 4; i++) {
    years.push(i);
  }

  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    email: '',
    phone: '',
    rollNo: '',
    father: {
      name: '',
      email: '',
      phone: ''
    },
    mother: {
      name: '',
      email: '',
      phone: ''
    },
    academics: {
      class10th: {
        schoolName: '',
        percentage: '',
        passoutYear: ''
      },
      class12th: {
        schoolName: '',
        percentage: '',
        passoutYear: ''
      }
    },
    gender: '',
    branch: '',
    semester: '',
    batch: '',
    dropout: false,
    remarks: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleNestedChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split('.'); // Split the name into keys array

    setFormData((prevData) => {
        let updatedData = { ...prevData };
        let current = updatedData;

        // Navigate through the keys to get to the last key
        for (let i = 0; i < keys.length - 1; i++) {
            current = current[keys[i]]; // Go deeper into the nested object
        }

        // Update the final key with the new value
        current[keys[keys.length - 1]] = value;

        return updatedData; // Return the updated state
    });
};


useEffect(() => {
    const fetchStudent = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/v1/students/profile?email=' + email);
            if (!response.ok) {
                throw new Error('Failed to fetch student information');
            }
            const data = await response.json();
            data.dob = new Date(data.dob).toISOString().split('T')[0];
            setFormData(data);
        } catch (err) {
            console.error(err);
            toast.error('Failed to fetch student information');
        }
    };
    fetchStudent();
}, [email]);


    
  


const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:3000/api/v1/students?email='+email, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      // Try to get the error message from the response
      const errorData = await response.json();
      const errorMessage = errorData.error ? errorData.error : 'Failed to update student';

      // If there's a messages array, join them for a better display
      if (errorData.messages && Array.isArray(errorData.messages)) {
        throw new Error(errorData.messages.join(', '));
      } else {
        throw new Error(errorMessage);
      }
    }

    const data = await response.json();
    console.log('Student updated successfully:', data);
    toast.success('Student updated successfully!'); // Show success toast
  } catch (error) {
    console.error('Error:', error);
    toast.error('Error updating student: ' + error.message); // Show error toast
  }
  console.log(formData);
};



  return (
    <>
      <div>
      <ToastContainer />
        <section className="bg-white dark:bg-gray-900">
          <div className="py-4 mx-7 mx-auto lg:py-7">
            <h1 className="mb-10 text-3xl underline font-bold text-center text-gray-900 dark:text-white">Add a new Student</h1>
            <form onSubmit={handleSubmit}>

              <div className='grid grid-cols-2 gap-5 px-5'>

                {/* Column 1 */}
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 px-7">

                  {/* Student Information */}
                  <h3 className="underline font-bold text-gray-900 dark:text-white">Student Information</h3>

                  <div className="sm:col-span-2">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Student's Name</label>
                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Student's Name" required />
                  </div>

                  <div className="w-full">
                    <label htmlFor="dob" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">DOB</label>
                    <input type="date" name="dob" id="dob" value={formData.dob} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
                  </div>

                  <div>
                    <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                    <select name="gender" id="gender " value={formData.gender} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
                      <option selected={true}>Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Trans">Transgender</option>
                    </select>
                  </div>

                  <div className="">
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Student's Phone Number</label>
                    <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Student's Phone Number" required />
                  </div>

                  <div className="">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Student's Email</label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Student's Email" required />
                  </div>

                  <div className="sm:col-span-2">
                    <hr />
                  </div>

                  {/* Parent Information */}
                  <h3 className="underline font-bold text-gray-900 dark:text-white">Parent Information</h3>

                  <div className="sm:col-span-2">
                    <label htmlFor="father.name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Father's Name</label>
                    <input type="text" name="father.name" id="father.name" value={formData.father.name} onChange={(e) => handleNestedChange(e, 'father')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Father's name" required />
                  </div>

                  <div className="">
                    <label htmlFor="father.phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Father's Phone Number</label>
                    <input type="tel" name="father.phone" id="father.phone" value={formData.father.phone} onChange={(e) => handleNestedChange(e, 'father')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Father's Phone Number" required />
                  </div>

                  <div className="">
                    <label htmlFor="father.email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Father's Email</label>
                    <input type="email" name="father.email" id="father.email" value={formData.father.email} onChange={(e) => handleNestedChange(e, 'father')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Father's Email" required />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="mother.name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mother's Name</label>
                    <input type="text" name="mother.name" id="mother.name" value={formData.mother .name} onChange={(e) => handleNestedChange(e, 'mother')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Mother's Name" required />
                  </div>

                  <div className="">
                    <label htmlFor="mother.phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mother's Phone Number</label>
                    <input type="tel" name="mother.phone" id="mother.phone" value={formData.mother.phone} onChange={(e) => handleNestedChange(e, 'mother')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Mother's Phone Number" required />
                  </div>

                  <div className="">
                    <label htmlFor="mother.email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mother's Email</label>
                    <input type="email" name="mother.email" id="mother.email" value={formData.mother.email} onChange={(e) => handleNestedChange(e, 'mother')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Mother's Email" required />
                  </div>

                </div>

                {/* Column 2 */}
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 px-7">

                  {/* Academic Information */}
                  <h3 className="underline font-bold text-gray-900 dark:text-white">Class 12th</h3>

                  <div className="sm:col-span-2">
                    <label htmlFor="academics.class12th.percentage" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Percentage</label>
                    <input type="number" name="academics.class12th.percentage" id="academics.class12th.percentage" value={formData.academics.class12th.percentage} onChange={(e) => handleNestedChange(e, 'academics.class12th.percentage')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Percentage" required />
                  </div>

                  <div className="w-full">
                    <label htmlFor="academics.class12th.schoolName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">School Name</label>
                    <input type="text" name="academics.class12th.schoolName" id="academics.class12th.schoolName" value={formData.academics.class12th.schoolName} onChange={(e) => handleNestedChange(e, 'academics.class12th.schoolName')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="School Name" required />
                  </div>

                  <div className="">
                    <label htmlFor="academics.class12th.passoutYear" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Passout Year</label>
                    <input type="number" name="academics.class12th.passoutYear" id="academics.class12th.passoutYear" value={formData.academics.class12th.passoutYear} onChange={(e) => handleNestedChange(e, 'academics.class12th.passoutYear')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Passout Year" required />
                  </div>

                  <h3 className="underline font-bold text-gray-900 dark:text-white">Class 10th</h3>

                  <div className="sm:col-span-2">
                    <label htmlFor="academics.class10th.percentage" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Percentage</label>
                    <input type="number" name="academics.class10th.percentage" id="academics.class10th.percentage" value={formData.academics.class10th.percentage} onChange={(e) => handleNestedChange(e, 'academics.class10th.percentage')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Percentage" required />
                  </div>

                  <div className="w-full">
                    <label htmlFor="academics.class10th.schoolName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">School Name</label>
                    <input type="text" name="academics.class10th.schoolName" id="academics.class10th.schoolName" value={formData.academics.class10th.schoolName} onChange={(e) => handleNestedChange(e, 'academics.class10th.schoolName')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="School Name" required />
                  </div>

                  <div className="">
                    <label htmlFor="academics.class10th.passoutYear" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Passout Year</label>
                    <input type="number" name="academics.class10th.passoutYear" id="academics.class10th.passoutYear" value={formData.academics.class10th.passoutYear} onChange={(e) => handleNestedChange(e, 'academics.class10th.passoutYear')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Passout Year" required />
                  </div>

                  <h3 className="underline font-bold text-gray-900 dark:text-white">College Information</h3>

                  <div className="sm:col-span-2">
                    <label htmlFor="rollNo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Roll No.</label>
                    <input type="text" name="rollNo" id="rollNo" value={formData.rollNo} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="23EBKCS0XX" required />
                  </div>

                  <div>
                    <label htmlFor="branch" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Branch</label>
                    <select name="branch" id="branch" value={formData.branch} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
                      <option selected={true}>Select Branch</option>
                      <option value="CS">CS</option>
                      <option value="DS">DS</option>
                      <option value="AI">AI</option>
                      <option value="IT">IT</option>
                      <option value="ECE">ECE</option>
                      <option value="VLSI">VLSI</option>
                      <option value="EE">EE</option>
                      <option value="MECH">MECH</option>
                      <option value="CIVIL">CIVIL</option>
                    </select>
                  </div>

                  < div>
                    <label htmlFor="semester" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Semester</label>
                    <select name="semester" id="semester" value={formData.semester} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
                      <option selected={true}>Select Semester</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="batch" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Batch</label>
                    <select name="batch" id="batch" value={formData.batch} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
                    <option value="">Select Batch</option>
                      {years.map((year) => (
                          <option key={year} value={`${year}-${year + 4}`}>
                              {year}-{year + 4}
                          </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="dropout" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dropout</label>
                    <select name="dropout" id="dropout" value={formData.dropout} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
                      <option value="false" selected={true}>False</option>
                      <option value="true">True</option>
                    </select>
                  </div>

                  <div className='sm:col-span-2'>
                    <label htmlFor="remarks" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Any Extra Information</label>
                    <textarea id="remarks" name="remarks" rows={4} value={formData.remarks} onChange={handleChange} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write any missing information here..." />
                  </div>

                </div>

              </div>

              {/* Submit Button */}
              <div className="flex justify-center mb-11">
                <button type="submit" className="inline-flex px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                  Update Student
                </button>
              </div>

            </form>
          </div>
        </section>

      </div>

    </>
  )
}

export default UpdateStudent