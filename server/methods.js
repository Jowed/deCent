Meteor.methods({

    send_email_proposition: function(to, from, subject, message){
	this.unblock();
	Email.send({
	    to: to,
	    from: from,
	    subject: subject,
	    text: message})
    }




})


Email.send({to:"tilford20@gmail.com", from: "tilford20@gmail.com", subject: "Hell Yeah", text:"ooooooo"})
