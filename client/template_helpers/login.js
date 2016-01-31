Session.set("login_fail", false)
Template.Login.events({
	"submit .login-form": function(event){
		event.preventDefault();
		var username = event.target.username.value
		var password = event.target.password.value
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
		Meteor.loginWithPassword(email, password, function(err) {
		if (err) {
			Session.set('errorMessage', err.message);
		}
	});
	}
})

Template.Login.helpers({
  errorMessage: function() {
    return Session.get('errorMessage');
  }
});