import { addEmployeeToDB, getAllEmployeesFromDB } from '../models/employeeModel.js';

// Add employee controller
export const addEmployee = async (req, res) => {
    try {
        const employeeData = req.body;
        const result = await addEmployeeToDB(employeeData);
        res.status(201).json({ message: 'Employee added successfully', employeeId: result.insertId });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all employees controller
export const getEmployees = async (req, res) => {
    try {
        const employees = await getAllEmployeesFromDB();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
