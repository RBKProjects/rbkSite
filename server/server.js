const mongoose = require('mongoose');
const permissionController = require('./permission/permissionController');
const express = require('express');
const app = express();
var router = express.Router();
const port = process.env.PORT || 1030;

//=============================================================================
/*								Database									 */
//=============================================================================
//const mongoURI = process.env.MONGODB_URI  || 'mongodb://admin:admin@ds111549.mlab.com:11549/rbkadmissions';
 const mongoURI = process.env.MONGODB_URI  || 'mongodb://localhost/rbkSiteSystem';

mongoose.connect(mongoURI);
db = mongoose.connection;

db.once('open',function () {
	permissionController.addminPermission();
	console.log('mongoDB is open');
});

require('./config/middleware.js') (app,express);
require('./config/routes.js') (app,express);

app.listen(port , function () {
	console.log('Server now listening on port ' + port);
	console.log('goto : http://localhost:' + port);
});

module.exports = app;

