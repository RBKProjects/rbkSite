const mongoose = require ('mongoose');

const UserSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	password: {
		type: String,
		//required : true
	},
	phone: {
		type: String
	},
	nationality: {
		type: String
	},
	gender: {
		type: String
	},
	isRefugee: {
		type: Boolean
	},
	email: {
		type: String,
		//required : true
		unique: true
	},
	dateOfBirth: {
		type: String
	},
	timestamp: {
		type: Date,
		default: Date.now
	},
	educationLevel: {
		type: String
	},
	englishAbility: {
		type: Number
	},
	knowRBK: {
		type: String,
	},
	codeExperience: {
		type: Boolean
	},
	// emailCode : {
	// 	type: String
	// },
	isEmailVerified: {
		type: Boolean
	},
	FbID: {
		type: String,
		unique: true
	},
	isLoggedIn: {
		type: Boolean,
		default: false
	},
	cohort: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Cohort'
	},
	isStudent: {
		type: Boolean,
		default: false
	},
	progress: {
		type: Number,
		default: 0
	},
	syudentNumber: {
		type: Number
	}
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
