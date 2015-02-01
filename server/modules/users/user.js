Meteor.publish("languages", function () {
    return Languages.find();
});

Meteor.methods({
    updateUser: function (user) {
        if (!Meteor.userId()) {
            throw new Meteor.Error("Not authorized");
        }

        Meteor.users.update({
            _id: user.id
        }, {
            $set: {
                "profile.language": user.language
            }
        }, function (error) {
            return error;
        });
    }
});
