Template.Edit_Profile.events({
    "submit .edit-profile-form": function(event, template) {
	event.preventDefault();
	console.log(template.data);
	var first = event.target.first.value;
	var last = event.target.last.value;
	var zip = event.target.zipcode.value;
	var interests = event.target.interests.value.split(',')
	var skills = event.target.skills.value.split(',')
	Meteor.users.update(
	    {_id: Meteor.userId()},
	    {$set: {
		"profile.firstname": first,
		"profile.lastname": last,
		"profile.zipcode": zip,
		"profile.interests": interests,
		"profile.skills": skills

	    }}

	)
	Router.go('/profile/' + Meteor.userId())


    }
})


Template.Edit_Profile.helpers({
     stringTags: function(tag_array)
     {
	 if( tag_array === undefined) {return}
	 else return tag_array.toString()
     }
 })
