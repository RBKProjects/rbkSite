const permissionModel = require('./permissionModel.js');

module.exports = {
  addminPermission : () => {
    var query = { name: 'administrator'},
    update = { name: 'administrator' },
    options = { upsert: true, new: true, setDefaultsOnInsert: true, passRawResult : true };
    permissionModel.findOneAndUpdate(query, update, options,
			(error, doc, result) => {
				if(error) return;
				if(!result.lastErrorObject.updatedExisting){
					console.log('default ADMIN permission added successfully');
				}
			}
		);
  }
}
