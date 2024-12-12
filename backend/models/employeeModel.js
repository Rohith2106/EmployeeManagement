import db from '../config/db.js';

// Add an employee to the database
export const addEmployeeToDB = async (employee) => {
    const { name, employeeId, email, phoneNumber, department, dateOfJoining, role } = employee;
    const query = `
        INSERT INTO Employees (name, employeeId, email, phone, department, dateOfJoining, role)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    const [result] = await db.execute(query, [name, employeeId, email, phoneNumber, department, dateOfJoining, role]);
    return result;
};

// Get all employees from the database
export const getAllEmployeesFromDB = async () => {
    const query = 'SELECT * FROM Employees';
    const [rows] = await db.query(query);
    return rows;
};
