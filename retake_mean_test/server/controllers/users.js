var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
	login: function(request, response){
		User.findOne({name: request.body.name}, function(err, user){
			if(err){
				response.json(err);
			}
			else if(user==null){
				User.create(request.body, function(err, user){
					if(err){
						response.json(err);
					}
					else{
						response.json(user);
					}
				})		
			}
			else{
				response.json(user);
			}
		})		
	},
	index: function(request, response){
		User.find({}, function(err, user){
			if(err){
				response.json(err);
			}
			else{
				response.json(user);
			}
		})
	},
	one: function(request, response){
		User.findOne({_id: request.params.id}, function(err, user){
			if(err){
				response.json(err);
			}
			else{
				response.json(user);
			}
		})
	},
	addScore: function(request, response){
		User.findOne({_id: request.body._id}, function(err, user){
			if(err){
				response.json(err);
			}
			else{
				user.score = request.body.score;
				user.save(function(err, user){
					if(err){
						response.json(err);
					}
					else{
						response.json(user)
					}
				})	
			}
		})
	} 
}