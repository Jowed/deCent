Template.BrowseProfiles.helpers({
    user: function(){
	return Meteor.users.find({},{$natural: -1});
    },
    searchTag: function(){
	var string = Session.get("search");
	var search_array = string.split(',');
	return search_array;

    },
    user_has_search_tag: function(user){
	if (Session.get("search") === "")
	    return true;

	var string = Session.get("search");
	var search_array = string.split(',');

	for (x in search_array)
	{
	    var term = search_array[x]
	    if (user.profile.interests != undefined)
		if (user.profile.interests.includes(term))
		    return true

	    if (user.profile.skills != undefined)
		if (user.profile.skills.includes(term))
		    return true
	}

    }

})


Template.BrowseProfiles.events({
    "change .searchbar":function(event, template) {
	console.log(event.target.value)
	Session.set("search", event.target.value)
    }
})
