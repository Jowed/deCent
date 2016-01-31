Session.set("login_fail", false)
Template.Login.events({
	"submit .login-form": function(event){
		event.preventDefault();
		var username = event.target.username.value
		var password = event.target.password.value
<<<<<<< HEAD
		Meteor.loginWithPassword(username,password,function(err){
			if (err){
				Session.set('errorMessage', err.message);
				return;
			}else{
				Router.go('/profile/' + Meteor.userId());
			}
		});
		
	}
});
Template.Login.helpers({
	errorMessage: function() {
		return Session.get('errorMessage');
=======
		Meteor.loginWithPassword(username,password);
	        Meteor.setTimeout(function(){
		    if (Meteor.user() != null)
			Router.go('/profile/' + Meteor.userId());
		    else    Session.set("login_fail", true)},1000)

>>>>>>> 31b1ad61bbb2e8f498e8e2e1e28df243415c15d1
	}
})

Template.Login.helpers({
	log_fail: function(event){
	    return Session.get("login_fail")

	}
})
