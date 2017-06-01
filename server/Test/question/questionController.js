const jwt = require('jwt-simple');
const questionModel = require('./questionModel.js');
const mongoose = require ('mongoose');

////
const trueFalseQModel = require('./trueFalse/trueFalseQModel.js');
const multiChoiceQModel = require('./multiChoice/multiChoiceQModel.js');
const fillQModel = require('./fill/fillQModel.js');

let Q        = require('q');




module.exports = {
	addQuestions :(req, res)=>{
		let question  = req.body.question;
		questionModel.findOne({_id : question.testId}, (err, questionEX)=>{
			if (questionEX) {
				res.json({isquestionExist : true })
			}else {
				questionModel.create(question, (err, data)=> {
					if (err) {
						res.status(500).send(err);
					}else{
						res.json(data);
					}
				});
			}
		})
	},
    sendQuestions:function(req,res){
        let tsetid=req.params.testid;
        questionModel.findOne({"test":tsetid},function(err,data){
            if (err){
                res.json(err)
            }else{
                let arrofQ=[];
                if (data.multiChoiceQ.length){
                    let query=[];
                    for(let i =0;i<data.multiChoiceQ.length;i++){
                        query.push(data.multiChoiceQ[i]);
                    }
                    multiChoiceQModel.find({
                        '_id': { $in:query}} , function(err,data){
                            if(err){res.json(err)}
                            else{
                                arrofQ.push(data) 
                            }
                        })
                    }
                    
                    if (data.fillQ.length){
                        let query=[];
                        for(let i =0;i<data.fillQ.length;i++){
                            query.push(data.fillQ[i]);
                        }
                        fillQModel.find({
                            '_id': { $in:query}} ,function(err,data){
                                if(err){res.json(err)}
                                else{
                                    arrofQ.push(data) 
                                }
                            }) 
                        }
                        if (data.trueFalseQ.length){
                            let query=[];
                            for(let i =0;i<data.trueFalseQ.length;i++){
                                query.push(data.trueFalseQ[i]);
                            }
                            Q( trueFalseQModel.find({
                                '_id': { $in:query}} ).then( function(data){  
                                    arrofQ.push(data) 
                                    res.json(arrofQ)
                                })) 
                            }
                            
                        }
                        
                    })
                }
                
                
                // //=============================================================================
                // /*                                  Question                                 */
                // //=============================================================================
                //     addTueFalseQ : (req, res)=>{
                    //         let question = req.body.question;
                    //         trueFalseQModel.create(question, (err, data)=> {
                        //             if (err) {
                            //                 res.status(500).send(err);
                            //             }else{
                                //                 res.json(data);
                                //             }
                                //         });
                                //     },
                                //     removeTueFalseQ : (req, res)=>{
                                    
                                    //     },
                                    //     editTueFalseQ : (req, res)=>{},
                                    
                                    //     addMultiChoiceQ : (req, res)=>{
                                        //         let question = req.body.question;
                                        //         multiChoiceQModel.create(question, (err, data)=> {
                                            //             if (err) {
                                                //                 res.status(500).send(err);
                                                //             }else{
                                                    //                 res.json(data);
                                                    //             }
                                                    //         });
                                                    //     },
                                                    //     removeMultiChoiceQ : (req, res)=>{},
                                                    //     editMultiChoiceQ : (req, res)=>{},
                                                    
                                                    //     addFillQ : (req, res)=>{
                                                        //         let question = req.body.question;
                                                        //         fillQModel.create(question, (err, data)=> {
                                                            //             if (err) {
                                                                //                 res.status(500).send(err);
                                                                //             }else{
                                                                    //                 res.json(data);
                                                                    //             }
                                                                    //         });
                                                                    //     },
                                                                    //     removeFillQ : (req, res)=>{},
                                                                    //     editFillQ : (req, res)=>{},
                                                                    
                                                                    // //=============================================================================
                                                                    // /*                                  Answers                                  */
                                                                    // //=============================================================================
                                                                    //     addTueFalseA : (req, res)=>{},
                                                                    //     editTueFalseA : (req, res)=>{},
                                                                    
                                                                    //     addMultiChoiceA : (req, res)=>{},
                                                                    //     editMultiChoiceA : (req, res)=>{},
                                                                    
                                                                    //     addFillA : (req, res)=>{},
                                                                    //     editFillA : (req, res)=>{},
                                                                }
                                                                