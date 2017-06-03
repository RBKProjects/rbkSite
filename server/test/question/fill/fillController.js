const jwt = require('jwt-simple');
const mongoose = require ('mongoose');
const questionModel = require('../questionModel.js');
const fillQModel = require('./fillQModel.js');
const fillAModel = require('./fillAModel.js');
///
const userModel = require('../../../user/userModel.js');


module.exports = {
	
    //=============================================================================
    /*                                  Question                                 */
    //=============================================================================
    addFillQ : (req, res)=>{
        let question = req.body.question;
        fillQModel.create(question, (err, data)=> {
            if (err) {
                res.status(500).send(err);
            }else{
                questionModel.findByIdAndUpdate(question.QuestionModelId, {$push: { "fillQ": data.id}},{ 'new': true}, (err,data)=>{
                    res.json(data)
                });
            }
        });
    },
    removeFillQ : (req, res)=>{
        let question = req.body.question;
        fillQModel.remove({_id : question.id}, (err)=>{
            if(err){
                res.json(err);
            }else{
                questionModel.findByIdAndUpdate(question.QuestionModelId, {$pull: { "fillQ": data.id}}, (err,data)=>{
                    res.json(data)
                });
            }
        })
    },
    editFillQ : (req, res)=>{
        let question = req.body.question;
        trueFalseQModel.findOne({_id : question.id }, (err, EXquestion)=>{
            if(err){
                res.status(500).send(err);
            }else{
                question.name = question.name || EXquestion.name; 
                question.section = question.section || EXquestion.section;
                question.arabic  = question.arabic || EXquestion.arabic;
                question.english = question.english || EXquestion.english;
                question.fillBox  = question.fillBox || EXquestion.fillBox;
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
    addFillA : (req, res)=>{
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
        
        
        
        
        fillAModel.create(answer, function (err, dataInserted) {
            if (err) {
                res.status(404).send(err);
            }else{
                res.status(201).json(dataInserted);
            }
        })
        
        
    },
    editFillA : (req, res)=>{}
}
