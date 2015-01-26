Template.users.helpers({
    users: function () {
        return Meteor.users.find();
    }
});


Template.users.events({
    "dblclick li.user": function () {
        Router.go('/user/' + this.username);
    }
});
