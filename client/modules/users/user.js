Meteor.subscribe("languages");

Template.user.helpers({
    //Languages available
    all_languages: function () {
        return Languages.find();
    },

    //Selected user current language
    current_language: function () {
        var selectedUse = Router.current().params.username;

        var current_user = Meteor.users.findOne({
            username: selectedUse
        });
        if (current_user && current_user.profile && current_user.profile.language) {
            return Languages.findOne({
                code: current_user.profile.language
            }).name;
        } else {
            return "undefined";
        }
    }
});

Template.user.events({
    "submit .user": function (event) {
        var id = event.target._id.value;
        var language = event.target.language.value;

        Meteor.call("updateUser", id, language, function (error) {
            if (error == null || error == undefined) {
                Notifications.success('User Update', 'Success');
            } else {
                Notifications.error('User Update', error.message);
            }
        });

        return false; //avoid standard form submit
    }
});
