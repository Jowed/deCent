Session.set("login_fail", false)
Template.Login.events({
	"submit .login-form": function(event){
		event.preventDefault();
		var username = event.target.username.value
		var password = event.target.password.value
		Meteor.loginWithPassword(username,password);
	        Meteor.setTimeout(function(){
		    if (Meteor.user() != null)
			Router.go('/profile/' + Meteor.userId());
		    else    Session.set("login_fail", true)},1000)

	}
})

Template.Login.helpers({
	log_fail: function(event){
	    return Session.get("login_fail")

	}
})
