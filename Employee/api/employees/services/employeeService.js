const mongoose  = require("mongoose");
const Employee  = require('../../../models/employeeModel').model;

//List all the employees
module.exports.list_all_employees = function(callback){
  // console.log("Called Service")
  // console.log("Model is : ", Employee)
	Employee.find({}, function(err, employees){
        if(err){
            callback(err)
        } else {
            //console.log("Retruning Callback")
            callback(null, employees)
        }
    })
}

//Create a new Employee
module.exports.create_a_employee = function(body, callback){


	console.log(body);

  var new_employee = new Employee(body);
	//
	// console.log("Before");
	// console.log(new_employee);

	var base = new_employee.salary.base;

  var deductions = 0.08*base;

	new_employee.salary.deductions = deductions; //updating the deductions
	new_employee.salary.take_home = base-deductions; //updating the take_home pay
	//
	// console.log("Inside Create Service");
	// console.log(new_employee);

  new_employee.save(function(err, employee){
		if(err){
      callback(err);
    }
    else{
			console.log("Inside returning callback");
			console.log(employee);
      callback(employee);
    }
	});

}

//View a employee
module.exports.view_a_employee = function(employeeId, callback) {
  //console.log(req.params.employeeId);
  Employee.findOne({id:employeeId}, function(err, employee){
      if(err){
          callback(err);
      } else {
          callback(null, employee)
      }
  });
}


//Update details of an existing employee
module.exports.update_a_employee = function(employeeId, updateBody, callback) {
	// 
	// var update_employee = new Employee(updateBody);
	// console.log(update_employee);
	// // console.log("Before");
	// // console.log(new_employee);

	var base = updateBody.salary.base;

  var deductions = 0.08*base;

	updateBody.salary.deductions = deductions; //updating the deductions
	updateBody.salary.take_home = base-deductions; //updating the take_home pay

  Employee.findOneAndUpdate({id:employeeId}, updateBody,{new: true},function(err, success){
      if(err){
          callback(err)
      } else {
          callback(null, success)
      }
  })
};

//Delete an Employee
module.exports.delete_a_employee = function(employeeId, callback) {

		console.log("Delete called");
    Employee.remove({id: employeeId}, function(err, employee) {
        if (err){
            callback(err);
        } else {
            callback(null, employee)
        }
  	})

}
