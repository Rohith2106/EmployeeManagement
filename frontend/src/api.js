

const BASE_URL = import.meta.env.VITE_BASE_URL;

// Fetch all employees
export const fetchEmployees = async () => {
    try {
        const response = await fetch(`${BASE_URL}/list`);
        if (!response.ok) throw new Error('Failed to fetch employees.');
        return await response.json();
    } catch (error) {
        console.error("Error fetching employees:", error.message);
        throw error;
    }
};

// Add a new employee
export const addEmployee = async (employeeData) => {
    try {
        const response = await fetch(`${BASE_URL}/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(employeeData),
        });
        if (!response.ok) throw new Error('Failed to add employee.');
        return await response.json();
    } catch (error) {
        console.error("Error adding employee:", error.message);
        throw error;
    }
};

// Delete an employee (optional if implementing delete functionality later)
export const deleteEmployee = async (employeeId) => {
    try {
        const response = await fetch(`${BASE_URL}/delete/${employeeId}`, {
            method: "DELETE",
        });
        if (!response.ok) throw new Error('Failed to delete employee.');
        return await response.json();
    } catch (error) {
        console.error("Error deleting employee:", error.message);
        throw error;
    }
};

//'./index.html', './src/**/*.{js,jsx,ts,tsx}'