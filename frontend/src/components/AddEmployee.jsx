import React, { useState } from 'react';
import { addEmployee } from '../api'; // Import addEmployee from the API module
import '../index.css';


const AddEmployee = () => {
    const initialState = {
        name: '',
        employeeId: '',
        email: '',
        phoneNumber: '',
        department: '',
        dateOfJoining: '',
        role: '',
    };

    const [formValues, setFormValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const departments = ['HR', 'Engineering', 'Marketing'];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        const errors = {};
        if (!formValues.name) errors.name = 'Name is required.';
        if (!formValues.employeeId) errors.employeeId = 'Employee ID is required.';
        if (!/^\S+@\S+\.\S+$/.test(formValues.email)) errors.email = 'Invalid email format.';
        if (!/^\d{10}$/.test(formValues.phoneNumber)) errors.phoneNumber = 'Phone number must be 10 digits.';
        if (!formValues.department) errors.department = 'Department is required.';
        if (!formValues.dateOfJoining) errors.dateOfJoining = 'Date of joining is required.';
        if (new Date(formValues.dateOfJoining) > new Date()) errors.dateOfJoining = 'Date cannot be in the future.';
        if (!formValues.role) errors.role = 'Role is required.';
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage('');
        setErrorMessage('');
        if (!validate()) return;

        try {
            await addEmployee(formValues); // Use the addEmployee API function
            setSuccessMessage('Employee added successfully!');
            setFormValues(initialState); // Reset form values
        } catch (error) {
            setErrorMessage(error.message || 'Failed to add employee.');
        }
    };

    const handleReset = () => {
        setFormValues(initialState);
        setErrors({});
        setSuccessMessage('');
        setErrorMessage('');
    };

    return (
        <div className="bg-white p-6 shadow-md rounded-lg w-full max-w-3xl mx-auto mt-10">
            <h2 className="text-xl font-bold mb-4 text-center">Add Employee</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-2">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formValues.name}
                        onChange={handleInputChange}
                        className="w-full border p-2 rounded"
                    />
                    {errors.name && <p className="text-red-500">{errors.name}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Employee ID:</label>
                    <input
                        type="text"
                        name="employeeId"
                        value={formValues.employeeId}
                        onChange={handleInputChange}
                        className="w-full border p-2 rounded"
                    />
                    {errors.employeeId && <p className="text-red-500">{errors.employeeId}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleInputChange}
                        className="w-full border p-2 rounded"
                    />
                    {errors.email && <p className="text-red-500">{errors.email}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Phone Number:</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        value={formValues.phoneNumber}
                        onChange={handleInputChange}
                        className="w-full border p-2 rounded"
                    />
                    {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Department:</label>
                    <select
                        name="department"
                        value={formValues.department}
                        onChange={handleInputChange}
                        className="w-full border p-2 rounded"
                    >
                        <option value="">Select</option>
                        {departments.map((dept) => (
                            <option key={dept} value={dept}>
                                {dept}
                            </option>
                        ))}
                    </select>
                    {errors.department && <p className="text-red-500">{errors.department}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Date of Joining:</label>
                    <input
                        type="date"
                        name="dateOfJoining"
                        value={formValues.dateOfJoining}
                        onChange={handleInputChange}
                        className="w-full border p-2 rounded"
                    />
                    {errors.dateOfJoining && <p className="text-red-500">{errors.dateOfJoining}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Role:</label>
                    <input
                        type="text"
                        name="role"
                        value={formValues.role}
                        onChange={handleInputChange}
                        className="w-full border p-2 rounded"
                    />
                    {errors.role && <p className="text-red-500">{errors.role}</p>}
                </div>
                {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
                {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
                <div className="flex justify-center gap-4 mt-6">
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600">
                        Submit
                    </button>
                    <button
                        type="button"
                        onClick={handleReset}
                        className="bg-gray-400 text-white px-4 py-2 rounded shadow hover:bg-gray-500"
                    >
                        Reset
                    </button>
                </div>
            </form>
        </div>
    );
    
};

export default AddEmployee;
