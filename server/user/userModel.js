const mongoose = require ('mongoose');
const bcrypt = require('bcrypt-nodejs');

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
	city : {
		type : String
	},
	isRefugee: {
		type: String
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
		type: String
	},
	knowRBK: {
		type: String,
	},
	codeExperience: {
		type: String
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
	}
	});

UserSchema.pre('save', function (next) {    
  var user = this;
   // only hash the password if it has been modified (or is new)
   if (!user.isModified('password')) {
     return next();
   }
     // hash the password along with our new salt
     bcrypt.hash(user.password, null, null, function (err, hash) {
       if (err) {
         return next(err);
       }
       // override the cleartext password with the hashed one
       user.password = hash;
       next();
     });

   });

	const User = mongoose.model('User', UserSchema);
	module.exports = User;
