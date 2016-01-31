Router.route('/', function () {
  this.render('Home', {
  });
});
        
Router.route('/register', function () {
  this.render('Register', { //make this template
      data: function () {}
  });
});

Router.route('/profile/:user_id', function () {
    console.log(Meteor.users.findOne(this.params.user_id))
    this.render('Profile', {
	data: function () 
	{
	    return {user: Meteor.users.findOne(this.params.user_id)}
	}
    });
});

Router.route('/browse', function () {
  this.render('Browse', {   // make this template
    data: function () {search: this.params.search}
  });
});

Router.route('/propose/:user_id/:land_id', function(){
    this.render('Proposition', {
	data: function() {
	    land = Land.findOne(this.params.land_id);
	    return {
		user: Meteor.users.findOne(this.params.user_id),
		land: land,
		owner: "sdsd"//Meteor.users.findOne(land.owner)
	    };
	}
    });
});

// Router.route('/search-grower/:search', function () {
//   this.render('SearchGrowers', { // make this template
//     data: function () {search: this.params.search}
//   });
// });
        
Router.route('/resources', function () {
  this.render('Resources', {   // make this template
  });
});


Router.route('/browse_profiles', function () {
    this.render('BrowseProfiles', {
    });
});
