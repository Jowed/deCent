Template.Profile.helpers({
    user_profile: function(){console.log(this, this); return this.user.profile },
    user_lands: function(){console.log(this.user._id);return Land.find({owner: this.user._id});},
    user_id: function(){return this.user._id}
})

Template.Profile.events({
	"click .addland": function(){
		console.log("This button worked!!!"),
		Land.insert({
		        name: "Lazy Acres",
			owner: Meteor.userId(),
			size: "1400 sq ft",
			zipcode: "95076",
			tags: ["peaches", "fig", "gummy worms", "money"]
		})
	}
})
