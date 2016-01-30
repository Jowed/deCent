Template.Header.helpers({
	userid: function(){
		return Meteor.userId();
	},
	loggedin: function(){
		return Meteor.user();
	}
})