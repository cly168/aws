app.factory('listsFactory', ['$http', function($http){
	var lists = [];
	var myFactory= {};
	myFactory.addLists = function(list, callback, errback){
		$http.post('/lists', list).then(function(list_json){
			if(list_json.data.error){
				errback(list_json.data.error)
			}
			else{
				callback();
				console.log('added list')
			}
		})
	}
	myFactory.getLists= function(id, callback, errback){
		$http.get('/lists/'+id).then(function(list_json){
			if(list_json.data.error){
				errback(list_json.data.error)
			}
			else{
				console.log(list_json.data)
				callback(list_json.data)
			}
		})
	}
	myFactory.updateChecked = function(listID, callback, errback){
		$http.put('/lists/'+listID+'/checked').then(function(list_json){
			if(list_json.data.error){
				errback(list_json_data.error)
			}
			else{
				callback(list_json.data)
			}
		})
	}
	return myFactory;
}])
