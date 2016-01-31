Template.BrowseProfiles.helpers({
	user: function(){
		return Meteor.users.find({},{$natural: -1});
	}
})
