const jwt = require('jwt-simple');
const mongoose = require ('mongoose');
const questionModel = require('../questionModel.js');
const trueFalseQModel = require('./trueFalseQModel.js');
const trueFalseAModel = require('./trueFalseAModel.js');




module.exports = {
    //=============================================================================
    /*                                  Question                                 */
    //=============================================================================
    addTueFalseQ : (req, res, model)=>{
        let question = req.body.question;
        trueFalseQModel.create(question, (err, data)=> {
            if (err) {
                res.status(500).send(err);
            }else{
                //     questionModel.findByIdAndUpdate(question.QuestionModelId, {$push: { "trueFalseQ": data.id}}, (err,data)=>{
                    //     res.json(data)
                    // });
                    questionModel.findByIdAndUpdate(question.QuestionModelId, {$push: { "trueFalseQ": data.id}},{ 'new': true},function(err,data){
                        if(err){
                            res.json(err)
                        }else {
                            res.json(data)
                        }
                    })
                }  
            });          
        },
        removeTueFalseQ : (req, res)=>{
            let question = req.body.question;
            trueFalseQModel.remove({_id : question.id}, (err)=>{
                if(err){
                    res.json(err);
                }else{
                    questionModel.findByIdAndUpdate(question.QuestionModelId, {$pull: { "trueFalseQ": data.id}}, (err,data)=>{
                        res.json(data)
                    });
                }
            })
        },
        
        editTueFalseQ : (req, res)=>{
            let question = req.body.question;
            trueFalseQModel.findOne({_id : question.id }, (err, EXquestion)=>{
                if(err){
                    res.status(500).send(err);
                }else{
                    question.name = question.name || EXquestion.name; 
                    question.section = question.section || EXquestion.section;
                    question.arabic  = question.arabic || EXquestion.arabic;
                    question.english = question.english || EXquestion.english;
                    question.trueValue  = question.trueValue || EXquestion.trueValue;
                    question.falseValue  = question.falseValue || EXquestion.falseValue;
                    question.save(function(err, savedquestion){
                        if(err){
                            res.status(500).send(err);
                        } else {
                            res.json(savedquestion);
                        }
                    });
                }
            });
        },
        
        
        //=============================================================================
        /*                                  Answers                                  */
        //=============================================================================
        addTueFalseA : (req, res)=>{
            ///the answer will be here an array from the front end 
            let answer=req.body.answers;
            trueFalseAModel.create(answer, function (err, dataInserted) {
				if (err) {
					res.status(404).send(err);
				}else{
					res.status(201).json(dataInserted);
				}
            })
            
            
            
        },
        editTueFalseA : (req, res)=>{}
        
    }
    