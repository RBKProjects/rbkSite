const mongoose = require ('mongoose');

const UserTestSchema = new mongoose.Schema({
	_id : {
		type : String
	},
	user_id : {
		type : mongoose.Schema.Types.ObjectId,
		ref : 'User',
    required : true
	},
	test_id : {
		type : mongoose.Schema.Types.ObjectId,
		ref : 'Test',
    required : true
	},
  score : {
    type : Number,
    default : 0
  }
});

const UserTest = mongoose.model('User_Test', UserTestSchema);
module.exports = UserTest;
