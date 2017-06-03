const Answer = require('../../test/question/answers/answerController.js');
const express = require('express');
const Router = express.Router();

//=============================================================================
/*									AnswersRoute			   				 */
//=============================================================================



     Router.route('/addAnswer').post(Answer.addAnswer);
    
    
    

module.exports = Router
