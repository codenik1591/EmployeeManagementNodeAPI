angular.module('EmployeeService', [])

.factory('Employee', function($http){
    var employeeFactory = {};
    var baseURI = '/api/employees';

    employeeFactory.getAllEmployees = function(){
        return $http.get(baseURI + '/list');
    }

    employeeFactory.createEmployee = function(body){
        // console.log("createEmployee called");
        // console.log(body);
        return $http.post(baseURI + '/create', body);
    }

    employeeFactory.updateEmployee = function(id, body){
        return $http.put(baseURI + '/update/'+ id, body);
    }

    employeeFactory.deleteEmployee = function(id, body){
        return $http.delete(baseURI + '/delete/'+ id);
    }




    return employeeFactory;
})
