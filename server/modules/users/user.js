Meteor.publish("languages", function () {
    return Languages.find();
});

Meteor.methods({
    updateUser: function (id, language) {
        if (!Meteor.userId()) {
            throw new Meteor.Error("Not authorized");
        }

        Meteor.users.update({
            _id: id
        }, {
            $set: {
                "profile.language": language
            }
        }, function (error) {
            return error;
        });
    }
});
