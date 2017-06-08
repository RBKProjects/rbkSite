const jwt = require('jwt-simple');
const questionModel = require('./questionModel.js');
const mongoose = require ('mongoose');

////
const trueFalseQModel = require('./trueFalse/trueFalseQModel.js');
const multiChoiceQModel = require('./multiChoice/multiChoiceQModel.js');
const fillQModel = require('./fill/fillQModel.js');
const userModel = require('../../user/userModel.js');



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
        let testid=req.params.testid;
        let userid=req.params.userid;
        let useranswer=[];
        let finishflag=true;
        
        userModel.findById({_id:userid} , function(err,data){
            if(err){
                
            }
            else{
                useranswer=data.answered;
            }
        });
        
        
        questionModel.findOne({"test":testid},function(err,data){
            console.log(data)
            if (err){
                res.json(err)
            }else{
                let arrofQ=[];
                if (data.multiChoiceQ.length){
                    let query=[];
                    for(let i =0;i<data.multiChoiceQ.length;i++){
                        query.push(data.multiChoiceQ[i]);
                    }
                    multiChoiceQModel.find(
                    // { '_id': { $in:query}}
                    {'_id': {$nin: useranswer}} /// WE ONLY SEARCH FOR THE QUESTION THAT NOT EXIST IN THE ANSWERED ARRAY
                    
                    , function(err,data){
                        if(err){res.json(err)}
                        else{
                            // arrofQ["multi"]=data
                            // arrofQ.push(data) 
                            for(let i =0 ;i<data.length;i++){
                                arrofQ.push(data[i]) 
                            }
                            
                        }
                    })
                }
                
                if (data.fillQ.length){
                    let query=[];
                    for(let i =0;i<data.fillQ.length;i++){
                        query.push(data.fillQ[i]);
                    }
                    fillQModel.find(
                    // {'_id': { $in:query}}
                    {'_id': {$nin: useranswer}}
                    
                    ,function(err,data){
                        if(err){res.json(err)}
                        else{
                            // arrofQ.push(data) 
                            // arrofQ["fill"]=data
                            for(let i =0 ;i<data.length;i++){
                                arrofQ.push(data[i]) 
                            }
                            
                        }
                    }) 
                }
                if (data.trueFalseQ.length){
                    let query=[];
                    for(let i =0;i<data.trueFalseQ.length;i++){
                        query.push(data.trueFalseQ[i]);
                    }
                    Q( trueFalseQModel.find(
                    // {  '_id': { $in:query}} 
                    {'_id': {$nin: useranswer}}
                    ).then( function(data){  
                        // arrofQ.push(data) 
                        // arrofQ["TF"]=data
                        for(let i =0 ;i<data.length;i++){
                            arrofQ.push(data[i]) 
                        }
                        // console.log(arrofQ[multi])
                        if(arrofQ.length>5){
                            finishflag=false
                            arrofQ=arrofQ.slice(0,5)
                        }
                        res.json({arrofQ:arrofQ,finishflag:finishflag})
                        //// here we are sending an object inside it objects contain array of ques
                    })) 
                }
               
                
            }
            
        })
    }
    
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
                                                    