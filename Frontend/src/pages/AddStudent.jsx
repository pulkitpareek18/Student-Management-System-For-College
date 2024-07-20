import React from 'react'
import Navbar from '../components/Navbar'

const Manage = () => {
  return (
    <>
      <Navbar />

      <div>

        {/* Personal Information */}
        <section className="bg-white dark:bg-gray-900">
          <div className="py-4 mx-7 mx-auto lg:py-7">
            <h1 className="mb-10 text-3xl underline font-bold text-center text-gray-900 dark:text-white">Add a new Student</h1>
            <form action="#">

              <div className='grid grid-cols-2'>

                {/* Column 1 */}

                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 px-7">


                  {/* Student Information */}
                  <>

                    <h3 className="underline font-bold text-gray-900 dark:text-white">Student Information</h3>

                    <div className="sm:col-span-2">
                      <label htmlFor="sname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Student's Name</label>
                      <input type="text" name="sname" id="sname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Student's Name" required />
                    </div>

                    <div className="w-full">
                      <label htmlFor="dob" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">DOB</label>
                      <input type="date" name="dob" id="dob" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required />
                    </div>

                    <div>
                      <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                      <select required id="gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                        <option selected={true}>Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Trans">Transgender</option>
                      </select>
                    </div>

                    <div className="">
                      <label htmlFor="stel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Student's Phone Number</label>
                      <input type="tel" name="stel" id="stel" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Student's Phone Number" required />
                    </div>

                    <div className="">
                      <label htmlFor="semail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Student's Email</label>
                      <input type="email" name="semail" id="semail" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Student's Email" required />
                    </div>

                    <div className="sm:col-span-2">
                      <hr />
                    </div>

                  </>


                  {/* Parent Information */}
                  <>
                    <h3 className="underline font-bold text-gray-900 dark:text-white">Parent Information</h3>

                    <div className="sm:col-span-2">
                      <label htmlFor="fname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Father's Name</label>
                      <input type="text" name="fname" id="fname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Father's name" required />
                    </div>

                    <div className="">
                      <label htmlFor="ftel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Father's Phone Number</label>
                      <input type="tel" name="ftel" id="ftel" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Father's Phone Number" required />
                    </div>

                    <div className="">
                      <label htmlFor="femail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Father's Email</label>
                      <input type="email" name="femail" id="femail" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Father's Email" required />
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="mname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mother's Name</label>
                      <input type="text" name="mname" id="mname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Mother's Name" required />
                    </div>


                    <div className="">
                      <label htmlFor="mtel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mother's Phone Number</label>
                      <input type="tel" name="mtel" id="mtel" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Mother's Phone Number" required />
                    </div>

                    <div className="">
                      <label htmlFor="memail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mother's Email</label>
                      <input type="email" name="memail" id="memail" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Mother's Email" required />
                    </div>

                  </>

                </div>

                {/* Column 2 */}

                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 px-7">


                  {/* Academic Information */}
                  <>

                    <h3 className="underline font-bold text-gray-900 dark:text-white">Class 12th</h3>

                    <div className="sm:col-span-2">
                      <label htmlFor="twper" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Percentage</label>
                      <input type="number" name="twper" id="twper" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Percentage" required />
                    </div>

                    <div className="w-full">
                      <label htmlFor="twsname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">School Name</label>
                      <input type="text" name="twsname" id="twsname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="School Name" required />
                    </div>

                    <div className="">
                      <label htmlFor="twyear" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Passout Year</label>
                      <input type="number" name="twyear" id="twyear" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Passout Year" required />
                    </div>

                    <h3 className="underline font-bold text-gray-900 dark:text-white">Class 10th</h3>

                    <div className="sm:col-span-2">
                      <label htmlFor="tenper" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Percentage</label>
                      <input type="number" name="tenper" id="tenper" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Percentage" required />
                    </div>

                    <div className="w-full">
                      <label htmlFor="tensname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">School Name</label>
                      <input type="text" name="tensname" id="tensname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="School Name" required />
                    </div>

                    <div className="">
                      <label htmlFor="tenyear" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Passout Year</label>
                      <input type="number" name="tenyear" id="tenyear" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Passout Year" required />
                    </div>

                    <h3 className="underline font-bold text-gray-900 dark:text-white">College Information</h3>

                    <div className="sm:col-span-2">
                      <label htmlFor="roll" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Roll No.</label>
                      <input type="text" name="roll" id="roll" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="23EBKCS0XX" required />
                    </div>

                    <div>
                      <label htmlFor="branch" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Branch</label>
                      <select required id="branch" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
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

                    <div>
                      <label htmlFor="sem" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Semester</label>
                      <select required id="sem" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
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
                      <select required id="batch" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                        <option selected={true}>Select Batch</option>
                        <option value="2020-2024">2020-2024</option>
                        <option value="2021-2025">2021-2025</option>
                        <option value="2022-2026">2022-2026</option>
                        <option value="2023-2027">2023-2027</option>
                        <option value="2024-2028">2024-2028</option>
                        <option value="2025-2029">2025-2029</option>
                        <option value="2026-2030">2026-2030</option>
                        <option value="2027-2031">2027-2031</option>
                        <option value="2028-2032">2028-2032</option>
                        <option value="2029-2033">2029-2033</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="dropout" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dropout</label>
                      <select required id="dropout" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                        <option value="false" selected={true}>False</option>
                        <option value="true">True</option>
                      </select>
                    </div>

                    <div className='sm:col-span-2'>
                      <label htmlFor="remarks" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Any Extra Information</label>
                      <textarea id="remarks" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write any missing information here..." />
                    </div>

                  </>


                </div>

              </div>


              {/* Submit Buttom */}
              <div className="flex justify-center mb-11">
                <button type="submit" className="inline-flex px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                  Add Student
                </button>
              </div>

            </form>
          </div>
        </section>

      </div>

    </>
  )
}

export default Manage