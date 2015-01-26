Template.index.helpers({
    nb_users: function(){
        return Meteor.users.find().count();
    }
})
