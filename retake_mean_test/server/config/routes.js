var users = require('./../controllers/users.js')
var questions = require('./../controllers/questions.js')
var path = require('path');

module.exports = function(app){
	app.post('/', users.login);
	app.post('/question', questions.add);
	app.get('/question', questions.get);
	app.post('/score', users.addScore);
	app.get('/users', users.index);
};