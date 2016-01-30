Router.route('/', function () {
  this.render('Home', {
    data: function () {}
  });
});
        
Router.route('/register', function () {
  this.render('Register', { //make this template
    data: function () {}
  });
});
        
Router.route('/profile/:user_id', function () {
  this.render('Profile', {     // make this template
    data: function () {user: Users.findOne(this.params.user_id)} 
  });
});
        
Router.route('/search-land/:search', function () {
  this.render('SearchLand', {   // make this template
    data: function () {search: this.params.search}
  });
});
        
Router.route('/search-grower/:search', function () {
  this.render('SearchGrowers', { // make this template
    data: function () {search: this.params.search}
  });
});
        
