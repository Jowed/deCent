Template.Register.events({
    "submit .register": function(event) {
	event.preventDefault();
	console.log(event);
	var first = event.target.first.value
	var last = event.target.last.value
	var zip = event.target.zipcode.value
	console.log(first, last, zip)
	Meteor.users.update(
	    {_id: Meteor.userId()},
	    {$set: {
		"profile.firstname": first,
		"profile.lastname": last,
		"profile.zipcode": zip
}}
	)


    }
})

Template.Register.helpers({
    logged_in: function () {return Meteor.user()}

})
