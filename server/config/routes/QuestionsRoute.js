const Questions = require('../../test/question/questionController.js');
const Fill = require('../../test/question/fill/fillController.js');
const TrueFalse = require('../../test/question/trueFalse/trueFalseController.js');
const MultiChoice = require('../../test/question/multiChoice/multiChoiceController.js');

const express = require('express');
const Router = express.Router();

//=============================================================================
/*									QuestionsRoute			   				 */
//=============================================================================
   Router.route('/add').post(Questions.addQuestions);

//=============================================================================
/*									QuestionsRoute			   				 */
//=============================================================================
   Router.route('/addM').post(MultiChoice.addMultiChoiceQ);
   Router.route('/editM').post(MultiChoice.editMultiChoiceQ);
   Router.route('/deleteM').post(MultiChoice.removeMultiChoiceQ);

//=============================================================================
/*									fillQuestionRoute  			   			 */
//=============================================================================
    Router.route('/addFillQ').post(Fill.addFillQ);
    Router.route('/editFillQ').post(Fill.editFillQ);
    Router.route('/deleteFillQ').post(Fill.removeFillQ);

//=============================================================================
/*									fillQuestionRoute  			   			 */
//=============================================================================
    Router.route('/addTrueFalseQ').post(TrueFalse.addTueFalseQ);
    Router.route('/editTrueFalseQ').post(TrueFalse.editTueFalseQ);
    Router.route('/deleteTrueFalseQ').post(TrueFalse.removeTueFalseQ);

    /////// get questions for specific test
    Router.route('/getques/:testid').get(Questions.sendQuestions);
    



    //// answers
    Router.route('/addTrueFalseA').post(TrueFalse.addTueFalseA);
    

module.exports = Router
