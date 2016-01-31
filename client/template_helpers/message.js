chatlog = []

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
