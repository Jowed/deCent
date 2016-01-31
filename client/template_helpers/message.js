
Template.MessengerInput.events ( {
    "submit .message":function(event){
	event.preventDefault();
	console.log(event)
	console.log(this.chat)
	var name = Meteor.user().profile.firstname
	var message= name + ":  " + event.target.text.value;
	if(message != ""){
	    Chats.update(this.chat,
			 {$push: { "log": message} })}
	event.target.text.value="";
    }
} )

Template.ChatLog.helpers({
    sentence:function() {
	log = Chats.findOne(this.chat).log
	console.log(log)
	return log.slice(log.length-10)}
})

Template.MessengerPage.helpers({
    talkers: function(){
	people = []
	for (user in  Chats.findOne(this.chat).talkers)
	{
	    var id = (Chats.findOne(this.chat).talkers[user])
	    people.push(Meteor.users.findOne(id))
	}
	console.log(people)
	return people
    }
})


Template.User_Card.events({
    "click .new-chat": function (event, template)
    {
	var friend = template.data._id
	console.log(friend)
	var user = Meteor.userId()
	var already_chatting = false
	if (friend != user)
	{
	    Chats.find().forEach(function(doc){
		if (doc.talkers.includes(friend) && doc.talkers.includes(user)){
		    Router.go("/conversation/" + doc._id)
		    already_chatting = true
		    console.log(doc)
		    return
		}
	    })
	    if (!already_chatting)
	    {
		Chats.insert({log:[], talkers:[friend, user]})
		var chat_id = Chats.find({}, {$sort:{createdAt: -1}, limit:1}).fetch()[0]._id;
		Router.go("/conversation/" + chat_id)


	    }
	}
    }

})
