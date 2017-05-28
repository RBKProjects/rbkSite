const jwt = require('jwt-simple');
const userModel = require('./userModel.js');
const mongoose = require ('mongoose');
const helper = require('../config/helper.js')



module.exports = {

	signup : (req, res) => {
		let userData  = req.body.user;
		//userData.emailCode = helper.randCode();
		//console.log(userData)
		userModel.findOne({email : userData.email}, (err, userEX)=>{
			if (userEX) {
				res.json({isUserExist : true })
			}else {

				userModel.create(userModel, (err, data)=> {
					if (err) {
						res.status(500).send(err);
					}else{
						//	helper.verify(data.email, data.emailCode);
						// helper.nextSteps(user.email);
						res.json(data);
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
			}else{
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
			}else{
				if (user.password === req.body.password) {
					user.isLoggedIn = true;
					user.save((err, result) => {
						if (err) {
							res.status(500).send(err);
						} else {
							let token = jwt.encode(user, 'secret');
							res.setHeader('x-access-token', token);
							res.json({ token: token, id: user._id, userName: user.firstName + " " + user.lastName });
						}
					});
				}else{
					res.json({isValidPass : false});
				}
			}
		})
	},

	updateUser : (req, res) => {
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
	        user.save((err, savedUser)=>{
	          if(err){
	            res.status(500).send(err);
	          } else {
	            res.json(savedUser);
	          }
	        });
	      }
	    })
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
			}else{
				let token = jwt.encode(user, 'secret');
				res.setHeader('x-access-token',token);
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
