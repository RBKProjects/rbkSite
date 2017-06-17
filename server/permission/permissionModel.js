const mongoose = require ('mongoose');

const PermissionSchema = new mongoose.Schema({
  name: {
    type : String
  }
});

const Permission = mongoose.model('Permission', PermissionSchema);
module.exports = Permission;
