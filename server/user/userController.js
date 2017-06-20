const mongoose = require ('mongoose');
const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
const helper = require('../config/helper.js')
const userModel = require('./userModel.js');
const cohortModel = require('../cohort/cohortModel.js');
const appModel = require('../application/appModel');


module.exports = {
	
	signup : (req, res) => {
		let userData  = req.body.user;
		console.log(userData);
		cohortModel.findOne({}, {}, { sort: { 'created_at' : -1 } }, function(err, data) {
			userData["cohort"] = data._id;
		});
		
		userModel.findOne({email : userData.email}, (err, userEX)=>{
			if (userEX) {
				res.json({isUserExist : true })
			} else {
				userModel.create(userData, (err, user)=> {
					if (err) {
						res.status(500).send(err);
					} else {
						appModel.create({userID: user._id, progress: 2}, (err, application) => {
							if(err) {
								res.status(500).send(err);
							} else {
								let token = jwt.sign(user._id, req.app.get('tokenSecret'), {
									expiresIn : 60*60*24 // expires in 24 hours
								});
								res.json({ token: token, id: user._id, userName: user.firstName + " " + user.lastName ,progress:application.progress});
							}
						});
					}
				});
			}
		})
	},
	
	isEmailVerified : (req, res)=>{
		userModel.findOne({_id: req.body.id}, (err, data) => {
			if (!data) {
				res.status(500).send(err);
			}else {
				if (data.isEmailVerified) {
					res.json(true)
				}else {
					res.json(false)
				}
			}
		})
	},
	
	verifyUser : (req, res) => {
		userModel.findOne( {_id : req.params.id} ,  (err, user) =>  {
			if (!user){
				res.status(500).send("user not found");
			} else {
				if (user.emailCode === req.body.emailCode){
					user.isEmailVerified = true;
					user.save(function (err, user) {
						if (err) {
							res.status(500).send(err)
						}
						res.json( { isEmailVerified : user.isEmailVerified });
					});
				}else{
					res.json(false);
				}
			}
		});
	},
	
	signin : (req, res) => {
		userModel.findOne({email : req.body.email}, (err, user) => {
			if (!user) {
				res.json({isUser : false});
			} else {
				helper.comparePass(req.body.password, user.password, (err, match) => {
					if (err) {
						res.status(500).send(err);
					}
					else if(!match){
						res.json({isValidPass : false});
					} else {
						appModel.findOne({userID: user._id}, (err, application) => {
							if(err) {
								res.status(500).send(err);
							} else {
								let token = jwt.sign(user._id, req.app.get('tokenSecret'), {
									expiresIn : 60*60*24 // expires in 24 hours
								});
								res.json({ token: token, id: user._id, userName: user.firstName + " " + user.lastName,progress:application.progress});
							}
						});
					}
				});
			}
		});
	},
	
	updateUser : (req, res) => {
		console.log(req.body)
		userModel.findOne({_id : req.params.id }, function(err, user){
			if(err){
				res.status(500).send(err);
			}else if(!user){
				res.status(500).send(new Error('User does not exist'));
			}else{
				user.firstName = req.body.firstName || user.firstName ;
				user.lastName = req.body.lastName || user.lastName;
				user.email = req.body.email || user.email;
				user.nationality = req.body.nationality || user.nationality;
				user.gender = req.body.gender || user.gender;
				user.dateOfBirth = req.body.dateOfBirth || user.dateOfBirth;
				user.city = req.body.city || user.city;
				user.phone = req.body.phone || user.phone;
				user.englishAbility = req.body.englishAbility || user.englishAbility;
				user.educationLevel = req.body.educationLevel || user.educationLevel;
				user.knowRBK = req.body.knowRBK || user.knowRBK;
				user.codeExperience = req.body.codeExperience || user.codeExperience;
				user.isRefugee = req.body.isRefugee || user.isRefugee;
				user.cohort =user.cohort;
				user.save((err, savedUser)=>{
					if(err){
						res.status(500).send(err);
					} else {
						appModel.findOneAndUpdate({userID: user._id}, {$set: {progress: '2'}}, {new: true}, (err,doc) => {
							if(err){
								res.status(500).send(err);
							}
							else {
								console.log("Updated");
								res.json({savedUser:savedUser,progress:doc.progress});
							}
						});
					}
				});
			}
		})
	},
	agreed : (req, res) => {
		console.log(req.body)
		userModel.findOne({_id : req.body.id }, function(err, user){
			if(err){
				res.status(500).send(err);
			}else if(!user){
				res.status(500).send(new Error('User does not exist'));
				
			} else {
				appModel.findOneAndUpdate({userID: user._id}, {$set: {progress: '3'}}, {new: true}, (err,doc) => {
					if(err){
						res.status(500).send(err);
					}
					else {
						console.log("Updated");
						res.json({progress:doc.progress});
					}
				});
			}
		});
	},

nextSteps : (req, res)=> {
	userModel.findOne({_id: req.params.id}, (err, user)=> {
		if (!user) {
			res.json("user not found")
		}else{
			helper.nextSteps(user.email);
			res.json("Next step has been sent")
		}
	})
	
},

getAll : (req, res)=> {
	userModel.find({}, (err, user)=>{
		if (!user) {
			res.json("user not found")
		}else{
			res.json(user);
		}
	})
},

facebookSignup : (req, res)=>{
	let userData  = req.body.user;
	userModel.findOne({FbID : userData.FbID}, (err, userEX)=>{
		if (userEX) {
			res.json({isUserExist : true })
		}else {
			userModel.create(userData, (err, data)=> {
				if (err) {
					res.status(500).send(err);
				}else{
					res.json(data);
				}
			});
		}
	})
},

facebookLogin :(req, res)=>{
	userModel.findOne({FbID : req.body.FbID}, (err, user) => {
		if (!user) {
			res.json({isUser : false});
		} else {
			let token = jwt.sign(user._id, req.app.get('tokenSecret'), {
				expiresIn : 60*60*24 // expires in 24 hours
			});
			res.json({token: token, id : user._id, userName : user.firstName + " " + user.lastName});
		}
	})
},

isUserLoggedIn: (req, res) => {
	userModel.findOne({ _id: req.body.user.id }, (err, result) => {
		if (!result) {
			res.status(500).send(err);
		} else {
			if (result.isLoggedIn) {
				res.json({ isLoggedIn: true });
			} else {
				res.json({ isLoggedIn: false });
			}
		}
	});
}
}
