var employeeController = angular.module('employeeController',[])

.controller('employeeController', function($scope, Employee){

    //var $scope.new_employee = {};


    function init(){
        Employee.getAllEmployees().then(function(success){
            $scope.employees = success.data
        }, function(err){
            console.log(err);
        })
    }
    //
    // $scope.editEmployee = function (id) {
    //     console.log("Id is : ", id);
    //     console.log("Update employee called");
    //     var body = this.empData;
    //
    //     Employee.updateEmployee(id, body).then(function(success){
    //         alert("Employee updated successfully")
    //     }, function(err){
    //         console.log(err);
    //     })
    //
    // }

    $scope.deleteEmployee = function (id) {
      Employee.deleteEmployee(id).then(function(success){
          alert("Employee with id: "+id+" deleted successfully")
      }, function(err){
          console.log(err);
      })

    }

    init();
})

.controller('employeeCreateController', function (Employee) {

    this.createEmployee = function(){
      var body = this.empData;
      console.log(body);

      Employee.createEmployee(body)
        .then(function(response){
          this.empData = {};
        })
    }
})

.controller('employeeUpdateController', function (Employee) {

    this.editEmployee = function (id) {
        console.log("Id is : ", id);
        console.log("Update employee called");
        var body = this.empData;

        Employee.updateEmployee(id, body).then(function(success){
            alert("Employee updated successfully")
        }, function(err){
            console.log(err);
        })

    }
})
