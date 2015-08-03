if (Meteor.isClient) {
  Template.body.helpers({
    'image_path' : function(){
      return "mcfly.jpg";
      //return Pictures.findOne({_id: "sdfsdf"});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}