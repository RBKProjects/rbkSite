const mongoose = require ('mongoose');

const EmployeeSchema = new mongoose.Schema({
	firstName : {
		type : String
	},
	lastName : {
		type : String
	},
	password : {
		type : String,
		required : true
	},
	email : {
		type : String,
	},
	userName : {
		type : String,
		required : true
	},
	phone : {
		type : String
	},
	dateOfBirth : {
		type : String
	},
	nationality : {
		type : String
	},
	city : {
		type : String
	},
	gender : {
		type : String
	},
	role : {
		type : String
	},
	permission : {
		type : mongoose.Schema.Types.ObjectId,
		ref : 'Permission'
	}
})

const Employee = mongoose.model('Employee', EmployeeSchema);
module.exports = Employee;
