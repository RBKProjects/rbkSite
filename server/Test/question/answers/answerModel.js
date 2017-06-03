const mongoose = require ('mongoose');

const AnswerSchema = new mongoose.Schema({
	name : {
		type : String
		// required : true
	},
	QId : {
		type : String,
		required : true
	},
	userId : {
		type : String,
		required : true
	},
	answer: {
		type: String
	}
})

const Answer = mongoose.model('Answer', AnswerSchema);
module.exports = Answer;
