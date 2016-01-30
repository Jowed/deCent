Template.Proposition.events({
    "submit .send-proposition": function(event, template){
	event.preventDefault();
	console.log(event, template)
	var message = event.target.body.value;
	//var sender = template.data.user.profile;
	var subject = "GrassRoots"//sender.firstname + " " sender.lastname + " wants to work on land you own, " + template.data.land.name
	console.log(message)
	// Meteor.call("send_email_proposition",
	//           template.data.owner.emails[0], //to
	//           template.data.user.emails[0],  //from
	//           subject,
	//           message)              //proposition

	console.log("/profile/" )//+ template.data.user._id)
	Router.go("/")///profile/" + template.user._id)
}


})
