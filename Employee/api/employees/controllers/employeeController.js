const Employee 			= require('../services/employeeService');

//List all the employees
module.exports.getAllEmployees = function(req, res){
	Employee.list_all_employees(function(err,employee){
		if(err){
			res.status(400).json(err);
		} else {
    	res.status(200).json(employee);
    }
	});
};

//Create a new Employee
module.exports.createEmployee = function(req, res){
console.log("API Create called");
//console.log(req.body);
var body = req.body;
	Employee.create_a_employee(body, function(err, new_body){
		// console.log("Inside create callback");
		// console.log(new_body);
		// console.log(err);
		if(err){
			res.status(400).json(err);
		} else {
    	res.status(200).json(new_body);
    }
	});

};

//View a employee
module.exports.viewEmployee = function(req, res) {
  //console.log(req.params.employeeId);
  var employeeId = req.params.employeeId;
  Employee.view_a_employee(employeeId, function(err, employee) {
      if (err){
        res.status(400).json(err);
    } else {
        res.status(200).json(employee);
    }
  })
}

//Update details of an existing employee
module.exports.updateEmployee = function(req, res) {
    //console.log("Params", req.params.employeeId)
    var id = req.params.employeeId;
    var updateBody = req.body;

		console.log("Update body");
		console.log(updateBody);

    Employee.update_a_employee(id, updateBody,function(err, employee) {
        //console.log(employee);
        if (err){
            res.send(err);
        } else {
            res.json(employee);
        }
  })
}

//Delete an Employee
module.exports.deleteEmployee = function(req, res) {
    id = req.params.employeeId;
    Employee.delete_a_employee(id, function(err, success){
        if(err){
            res.status(400).json(err)
        } else {
            res.status(200).json(success);
        }
    })
};
