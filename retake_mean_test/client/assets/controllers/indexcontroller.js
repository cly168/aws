app.controller('indexController', ['$scope', 'usersFactory', '$routeParams', '$cookies', 'questionFactory', '$location', function($scope, usersFactory, $routeParams, $cookies, questionFactory, $location){
	$scope.users=[];
	$scope.user={};
	$scope.message = '';
	$scope.user = $cookies.user;
	$scope.question = {};
	$scope.questions = [];
	$scope.answer = [];
	$scope.quizmessage = '';
	if($cookies.grade){
		$scope.lastgrade = $cookies.grade;
	}
	function error(err){
		$scope.message = err;
	}
	function getAll(users){
		$scope.users = users;
	}
	function getQuestions(questions){
		$scope.questions=questions
	}
	$scope.addQuestions=function(){
		questionFactory.addQuestion($scope.question, error);
		$location.url('/index');
	}
	$scope.logout=function(){
		$cookies.user = null;
		$cookies.lastgrade = null;
		$location.url('/')
	}

	$scope.grade = function(){
		var correct = 0;
		for(var i=0; i<$scope.questions.length; i++){
			if($scope.answer[i] == null){
				$scope.quizmessage = 'You must answer all questions'
				return;
			}
			if($scope.answer[i]==$scope.questions[i].correct){
				correct++;
			}
		}
		console.log(correct)
		$cookies.grade = correct;
		$scope.lastgrade = correct;
		$scope.user.score = correct;
		usersFactory.grade($scope.user, error)
		$location.url('/index')
	}
	if($cookies.user == null){
		$location.url('/')
	}
	questionFactory.getQuestions(getQuestions, error);
	usersFactory.getUsers(getAll, error);
}]);