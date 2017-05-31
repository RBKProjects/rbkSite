const mongoose = require ('mongoose');

const TrueFalseASchema = new mongoose.Schema({
	// name : {
	// 	type : String,
	// 	required : true
	// },
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

const TrueFalseA = mongoose.model('TrueFalseA', TrueFalseASchema);
module.exports = TrueFalseA;
