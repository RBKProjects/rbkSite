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
	confirmPassword: {
		type: String
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
		type: String
	},
	email: {
		type: String,
		//required : true
		unique: true
	},
	conEmail: {
		type: String,
		//required : true
		// unique: true
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
		type: String
	},
	knowRBK: {
		type: String,
	},
	codeExperience: {
		type: String
	},
	// emailCode : {
		// 	type: String
		// },
		isEmailVerified: {
			type: Boolean
		},
		FbID: {
			type: String,
			// unique: true
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
			default: 2
		},
		syudentNumber: {
			type: Number
		},
		answered:[]
	});
	
	const User = mongoose.model('User', UserSchema);
	module.exports = User;
	