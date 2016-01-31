chatlog = []

Template.MessengerInput.events ( {
    "submit .message":function(event){
	event.preventDefault();
	console.log(event)
	var message= event.target.text.value;
	if(message != ""){
	    Chats.update(Chats.findOne()._id, {$push: { log: message} })}
	event.target.text.value="";
    }
} )

Template.ChatLog.helpers({
    sentence:function() {
	log = Chats.findOne().log
	console.log(log)
	return log.slice(log.length-10)}
})

