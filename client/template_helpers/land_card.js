Template.Land_Card.helpers({
    get_owner: function(owner){
	console.log(owner);
	return Meteor.users.findOne(owner).profile;	},
    can_edit: function(owner){
	if (Meteor.userId() === owner)
	    return true
	else
	    return false
    },


    editing: function(id) {
	console.log(id, Session.get("editing_id"))
	if (id === Session.get("editing_id"))
	    return true
	else
	    return false
    }

})


Template.Land_Card.events({
    "click .edit-land_card": function(event, template){
	console.log(template)
	Session.set("editing_id", template.data._id)
    },
	
	"click .delete-land_card": function(event, template){
			if(confirm("Are you sure?")){
			Land.remove(template.data._id);
		}			
	}
})



Template.EditLand.helpers({
    stringTags: function(tag_array)
    {
	return tag_array.toString()
    }
})

Template.EditLand.events({
    "submit .edit-land-form": function(event)
    {
	event.preventDefault();

	var id = Session.get("editing_id")
	console.log(id)
	var name = event.target.name.value
	var size = event.target.size.value
	var address = event.target.address.value
	var tags = event.target.tags.value.split(',')
	console.log(id, name, size, address, tags)
	Land.update({_id: id},
		    {$set:
			 {
			     "name": name,
			     "size": size,
			     "address": address,
			     "tags": tags
			 }}
		   )
	Session.set("editing_id", "")


    }
})
