app.factory('questionFactory', ['$http', function($http){
	var questions = [];
	var myFactory = {};
	myFactory.addQuestion=function(question, errback){
		$http.post('/question', question).then(function(question_json){
			if(question_json.data.errors){
				console.log(question_json.data)
				errback(question_json.data.message)
			}
			else{
				console.log(question_json.data)
			}
		})
	}
	myFactory.getQuestions = function(callback, errback){
		$http.get('/question').then(function(question_json){
			if(question_json.data.errors){
				errback(question_json.data.errors);
			}
			else{
				callback(question_json.data);
			}
		})
	}
	return myFactory;
}])