import express from 'express';
import { addEmployee, getEmployees } from '../controllers/employeeController.js';

const router = express.Router();

// Route to add an employee
router.post('/add', addEmployee);

// Route to get all employees
router.get('/list', getEmployees);

export default router;
