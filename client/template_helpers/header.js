Template.Header.helpers({
	userid: function(){
		return Meteor.userId();
	},
	loggedin: function(){
		return Meteor.user();
	}
})
Template.Header.events({
	"click .logout": function(event){
		event.preventDefault();
		Meteor.logout();
	}
})