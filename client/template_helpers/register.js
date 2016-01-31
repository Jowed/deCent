Template.Register.events({
    "submit .register": function(event) {
	event.preventDefault();
	console.log(event);
	var first = event.target.first.value;
	var last = event.target.last.value;
	var zip = event.target.zipcode.value;
	var steward = event.target.steward.checked;
	console.log(first, last, zip, steward)
	Meteor.users.update(
	    {_id: Meteor.userId()},
	    {$set: {
		"profile.firstname": first,
		"profile.lastname": last,
		"profile.zipcode": zip,
		"profile.steward": steward,
	    }}
	    
	)
	Router.go('/profile/' + Meteor.userId())
	

    }
})

Template.Register.helpers({
    logged_in: function () {return Meteor.user()}

})
