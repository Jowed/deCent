Template.Land_Card.helpers({
	get_owner: function(owner){
		console.log(owner);
		return Meteor.users.findOne(owner).profile;
	}
})