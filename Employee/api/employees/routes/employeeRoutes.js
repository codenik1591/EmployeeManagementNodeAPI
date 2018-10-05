const Employee 		= require('../controllers/employeeController');

module.exports = function (app) {
		app.get('/api/employees/list', Employee.getAllEmployees);
		app.post('/api/employees/create', Employee.createEmployee);
    app.get('/api/employees/view/:employeeId', Employee.viewEmployee);
    app.put('/api/employees/update/:employeeId', Employee.updateEmployee);
    app.delete('/api/employees/delete/:employeeId', Employee.deleteEmployee);
}
