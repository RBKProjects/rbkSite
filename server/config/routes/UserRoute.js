const User = require('../../user/userController.js');
const express = require('express');
const Router = express.Router();

//=============================================================================
/*										testRoute			   				 */
//=============================================================================
    Router.route('/signup').post( User.signup);
    Router.route('/signin').post( User.signin);
    Router.route('/facebookLogin').post(User.facebookLogin);
    Router.route('/facbookSignup').post(User.facebookSignup);
    Router.route('/update/:id').put(User.updateUser);
    Router.route('/agree').post(User.agreed);
    
    Router.route('/verify/isEmailVerified').post(User.isEmailVerified)
    Router.route('/verify/:id').post(User.verifyUser);
    Router.route('/nextSteps/:id').get(User.nextSteps);
    Router.route('/getAll').get(User.getAll);
    Router.route('/isUserLoggedIn').post(User.isUserLoggedIn);




module.exports = Router;
