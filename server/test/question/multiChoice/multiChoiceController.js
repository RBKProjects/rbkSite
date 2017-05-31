const jwt = require('jwt-simple');
const mongoose = require ('mongoose');
const questionModel = require('../questionModel.js');
const multiChoiceQModel = require('./multiChoiceQModel.js');



module.exports = {
    //=============================================================================
    /*                                  Question                                 */
    //=============================================================================
       
        addMultiChoiceQ : (req, res)=>{
            let question = req.body.question;
            multiChoiceQModel.create(question, (err, data)=> {
                if (err) {
                    res.status(500).send(err);
                }else{
                    questionModel.findByIdAndUpdate(question.QuestionModelId, {$push: { "multiChoiceQ": data.id}},{ 'new': true}, (err,data)=>{
                        res.json(data)
                    });
                }  
            });     
        },
        
        removeMultiChoiceQ : (req, res)=>{
            let question = req.body.question;
            multiChoiceQModel.remove({_id : question.id}, (err)=>{
                if(err){
                    res.json(err);
                }else{
                    questionModel.findByIdAndUpdate(question.QuestionModelId, {$pull: { "multiChoiceQ": data.id}}, (err,data)=>{
                        res.json(data)
                    });
                }
            })
        },

        editMultiChoiceQ : (req, res)=>{
            let question = req.body.question;
            trueFalseQModel.findOne({_id : question.id }, (err, EXquestion)=>{
                if(err){
                    res.status(500).send(err);
                }else{
                    question.name = question.name || EXquestion.name; 
                    question.section = question.section || EXquestion.section;
                    question.arabic  = question.arabic || EXquestion.arabic;
                    question.english = question.english || EXquestion.english;
                    question.firstValue  = question.firstValue || EXquestion.firstValue;
                    question.secValue  = question.secValue || EXquestion.secValue;
                    question.thirdValue  = question.thirdValue || EXquestion.thirdValue;
                    question.answerValue  = question.answerValue || EXquestion.answerValue;
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
        
        addMultiChoiceA : (req, res)=>{},
        editMultiChoiceA : (req, res)=>{}
}
