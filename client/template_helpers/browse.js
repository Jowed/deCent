Template.Browse.helpers({
	land: function(){
		return Land.find({},{$natural: -1});
	}
})