const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var EmployeeSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    first: {
      type: String,
      required: true
    },
    last: {
      type: String,
      required: true
    }
  },
  salary: {
    base: {
      type: Number,
      required: true
    },
    take_home: {
      type: Number
    },
    deductions: {
      type: Number
    }
  },
  department: {
    type: String,
    required: true
  },
  manager: {
    type: String,
    required: true
  }

});

module.exports.model = mongoose.model('Employee', EmployeeSchema);
