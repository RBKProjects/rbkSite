const jwt = require('jwt-simple');
const mongoose = require ('mongoose');
const questionModel = require('../questionModel.js');
const multiChoiceQModel = require('./multiChoiceQModel.js');
const multiChoiceAModel = require('./multiChoiceAModel.js');


///////////
const userModel = require('../../../user/userModel.js');


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
    
    addMultiChoiceA : (req, res)=>{
        let answer=req.body.answers;
        
        
        var arrOfQid=[];
        for(let i=0;i<req.body.answers.length;i++){
            arrOfQid.push(req.body.answers[i].QId)
        }
        var query = {'_id': req.body.answers[0].userId};
        var doc = {$push: {answered:{ $each: arrOfQid } }};
        
        userModel.findOneAndUpdate(query,doc, { "new": true},function(err,data){
            if(err){
                res.json(err)
            }else {
                // res.json(data)
            }
        })
        
        
        
        
        multiChoiceAModel.create(answer, function (err, dataInserted) {
            if (err) {
                res.status(404).send(err);
            }else{
                res.status(201).json(dataInserted);
            }
        })
        
        
        
    },
    editMultiChoiceA : (req, res)=>{}
}
