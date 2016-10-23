app.controller('successController', ['$scope', 'usersFactory', '$routeParams', '$cookies', 'listsFactory', function($scope, usersFactory, $routeParams, $cookies, listsFactory){
	$scope.users=[];
	$scope.user={};
	$scope.message = '';
	$scope.user = $cookies.user;
	$scope.list = {};
	$scope.lists = [];
	$scope.list._user1 = $scope.user;
	$scope.list.checked = false;
	function error(err){
		$scope.message = err;
	}
	function getAll(users){
		$scope.users = users;
	}
	function getMyList(lists){
		$scope.lists = lists;
	}
	function reloadList(){
		listsFactory.getLists($scope.user._id, getMyList, error)
	}
	function getUser(user){
		$scope.user = user;
		listsFactory.getLists($scope.user._id, getMyList, error);
	}
	$scope.addList=function(){
		listsFactory.addLists($scope.list, reloadList, error)			
	}
	$scope.checkedList = function(listID){
		listsFactory.updateChecked(listID, reloadList, error)
	}
	if($routeParams.id){
		usersFactory.getUser($routeParams.id, getUser);
	}
	else{
		usersFactory.getUsers(getAll);
		listsFactory.getLists($scope.user._id, getMyList, error);
	}

	

}])	