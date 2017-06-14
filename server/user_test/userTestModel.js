const mongoose = require ('mongoose');

const TestSchema = new mongoose.Schema({
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
})

const Test = mongoose.model('Test', TestSchema);
module.exports = Test;
