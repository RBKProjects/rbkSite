const jwt = require('jwt-simple');
const testModel = require('./testModel.js');
const mongoose = require ('mongoose');
const helper = require('../config/helper.js')


module.exports = {
	addTest:(req, res)=>{
		let test  = req.body.test;
		testModel.findOne({name : test.name}, (err, testEX)=>{
			if (testEX) {
				res.json({istestExist : true })
			}else {
				testModel.create(test, (err, data)=> {
					if (err) {
						res.status(500).send(err);
					}else{
						res.json(data);
					}
				});
			}
		})
	},

	editTestName : ()=>{
		let test = req.body.test;
		testModel.findOne({_id : test.id }, (err, EXtest)=>{
	      if(err){
	        res.status(500).send(err);
	      }else{
	        test.name = req.body.name || EXtest.name ;
					test.save(function(err, savedTest){
	          if(err){
	        	    res.status(500).send(err);
	          } else {
	          	  res.json(savedTest);
	          }
	        });
	      }
	    });
	},

	deleteTest : (req, res)=>{
		let test = req.body.test;
		testModel.remove({_id : test.id}, (err)=>{
			if(err){
				res.json(err);
			}else{
				res.json({isDeleted: true});
			}
		})
	}
	
}
