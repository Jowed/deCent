Meteor.methods({
  update_user: function (user_id, firstname, lastname, zipcode) 
    {
	console.log(Meteor.users.findOne())
	user= Meteor.users.findOne(user_id)
	user.firstname = firstname
	console.log(user)
	Meteor.users.update(
	    {_id: user_id},
	    {$set: {"firstname": firstname}}
	)
      console.log(Meteor.users.findOne())
    }


})
