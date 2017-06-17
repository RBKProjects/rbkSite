const mongoose = require ('mongoose');

const multiChoiceSchema = new mongoose.Schema({
	section : {
		type : String,
		required : true
	},
	arabic : {
		type : String,
		required : true
	},
	english : {
		type : String,
		required : true
	},
	// firstValue : {
	// 	type : String,
	// 	required : true
	// },
	// secValue : {
	// 	type : String,
	// 	required : true
	// },
	// thirdValue : {
	// 	type : String,
	// 	required : true
	// },
	// forthValue : {
	// 	type : String,
	// 	required : true
	// },
	choices:[],
	firstValueScore: {
		type: Number,
		default: 1
	},
	secValueScore: {
		type: Number,
		default: 1
	},
	thirdValueScore: {
		type: Number,
		default: 1
	},
	forthValueScore: {
		type: Number,
		default: 1
	}
})

const multiChoice = mongoose.model('multiChoice', multiChoiceSchema);
module.exports = multiChoice;
