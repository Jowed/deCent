Template.Login.events({
	"submit .login-form": function(event){
		event.preventDefault();
		var username = event.target.username.value
		var password = event.target.password.value
		Meteor.loginWithPassword(username,password);
		Router.go('/profile/' + Meteor.userID());
	}
})