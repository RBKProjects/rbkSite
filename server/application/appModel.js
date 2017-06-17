const mongoose = require('mongoose');

const AppSchema = new mongoose.Schema({
  userID : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User'
  },
  testStatus : {
    type : String
  },
  appStatus : {
    type : String
  },
  progress : {
    type : Number
  }
});

const App = mongoose.model('application', AppSchema);
module.exports = App;
