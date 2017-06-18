const jwt = require('jsonwebtoken');
const _ = require('underscore');
const express = require('express');
const Router = express.Router();
const env = require('../../env.js');

Router.use(function(req, res, next) {
  // check for non restricted endpoints
  let nonSecurePaths = ['/user/signin', '/user/signup', '/user/facebookLogin', '/user/facbookSignup', '/emp/signin'];
  if ( _.contains(nonSecurePaths, req.path) ){
    return next();
  }
  // check header or url parameters or post parameters for token
  var token = req.headers['x-access-token'];

  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, env.secret, function(err, decoded) {
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });
      } else {
        // if everything is good, save to request for use in other routes
        req.userID = decoded;
        next();
      }
    });
  } else {
    // if there is no token
    // return an error
    return res.status(403).send({
        success: false,
        message: 'No token provided.'
    });
  }
});

module.exports = Router;
