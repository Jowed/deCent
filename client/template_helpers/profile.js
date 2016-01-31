Template.Profile.helpers({
    user_profile: function(){console.log(this, this); return this.user.profile },
    user_lands: function(){console.log(this.user._id);return Land.find({owner: this.user._id});},
    user_id: function(){return this.user._id}
})

Template.Profile.events({
	"click .addland": function(){
		Land.insert({
		    name: "Lazy Acres",
			owner: Meteor.userId(),
			size: "1000 sq ft",
			zipcode: Meteor.user().profile.zipcode,
			tags: ["kale", "peaches", "onions"]
		})
	}
})
