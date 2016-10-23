var users = require('./../controllers/users.js')
var lists = require('./../controllers/lists.js')
//--------routes------------------//
console.log('routes');

var path = require('path');

module.exports = function(app){
	app.get('/users', users.index);
	app.get('/users/:id', users.one);
	app.post('/login', users.login);
	app.post('/lists', lists.add);
	app.get('/lists/:id', lists.show);
	app.put('/lists/:id/checked', lists.update);

	// app.put('/users/:id', users.update);
	// app.delete('/users/:id', users.delete);
};