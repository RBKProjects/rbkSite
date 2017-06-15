const jwt = require('jwt-simple');
const mongoose = require ('mongoose');
const questionModel = require('../questionModel.js');
const AnswerModel = require('./answerModel.js');
///
const userModel = require('../../../user/userModel.js');


module.exports = {
	
    
    //=============================================================================
    /*                                  Answers                                  */
    //=============================================================================
    addAnswer : (req, res)=>{
        let answer=req.body.answers;
        if(req.body.finishtest==true){
            userModel.findOneAndUpdate({'_id': req.body.answers[0].userId},{$inc: {progress:1}}, { "new": true},function(err,data){
                if(err){
                    res.json(err)
                }else {
                    // res.json(data)
                }
            }) 
        }
        
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
                AnswerModel.create(answer, function (err, dataInserted) {
                    if (err) {
                        res.status(404).send(err);
                    }else{
                        res.status(201).json({dataInserted:dataInserted,progress:data.progress});
                    }
                })
                
            }
        })
        
        
        
        
        
        
    }
}
