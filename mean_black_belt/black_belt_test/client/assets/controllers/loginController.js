app.controller('loginController', ['$scope', 'usersFactory', '$location', '$cookies', function($scope, usersFactory, $location, $cookies){
	$scope.users=[];
	$scope.user={};
	$scope.message = '';
	$scope.user.list = []; 
	function success(users){
		$scope.users = users;
	}
	function getAll(users){
		$scope.users = users;
	}
	function getUser(user){
		$scope.user = user;
		$cookies.user = user;
		usersFactory.getUsers(getAll);
		$location.url('/success');
	}
	function error(err){
		$scope.message = err;
	}
	$scope.loginUser = function(){
		$scope.users= []; 
		usersFactory.loginUsers($scope.user, success, error, getUser)
	}

}])