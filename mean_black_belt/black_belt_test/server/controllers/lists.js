var mongoose = require('mongoose');
var User = mongoose.model('User');
var List = mongoose.model('List');

module.exports = {
	add: function(request, response){
		console.log(request.body, 'here')
		List.create(request.body, function(err, list){
			if(err){
				response.json(err);
			}
			else{
				response.json(list);
			}
		})
	},
	show: function(request, response){
		List.find({$or:[{_user1: request.params.id}, {_user2: request.params.id}]}).populate('_user1').populate('_user2').exec(function(err, list){
			if(err){
				response.json(err);
			}
			else{
				response.json(list);
			}
		})
	},
	update: function(request, response){
		List.findOne({_id: request.params.id}, function(err, list){
			if(err){
				response.json(err);
			}
			else{
				list.checked = !list.checked;
				list.save(function(err, list){
					if(err){
						response.json(err);
					}
					else{
						response.json(list);
					}
				});
			}
		})
	}
}