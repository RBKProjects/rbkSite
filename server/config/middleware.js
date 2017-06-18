const morgan = require('morgan');
const bodyParser = require('body-parser');

module.exports = function(app, express){
  app.use(morgan('dev'));
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(express.static(__dirname + '/../../dist'));
	app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
  app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
  app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
};
