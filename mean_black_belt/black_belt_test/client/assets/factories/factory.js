app.factory('usersFactory', ['$http', function($http){
	var users = [];
	var myFactory = {};
	myFactory.loginUsers = function(user, callback, errback, userback){
		$http.post('/login', user).then(function(users_json){
			console.log('factory')
			if(users_json.data.error){
				errback(users_json.data.error);
			}
			else{
				userback(users_json.data)
				callback(users)
			}
		})
	}
	myFactory.getUsers = function(callback){
		$http.get('/users').then(function(users_json){
			users = users_json.data;
			callback(users);
		})
	}
	myFactory.getUser = function(id, callback){
		$http.get('/users/'+id).then(function(users_json){
			if(users_json.data.errors){
				response.json('Could not get user')
			}
			else{
				callback(users_json.data)
			}
		})
	}
	return myFactory;
}])