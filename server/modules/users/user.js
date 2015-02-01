Meteor.publish("languages", function () {
    return Languages.find();
});

Meteor.methods({
    updateUser: function (user, callback) {
        debugger;
        if (!Meteor.userId()) {
            throw new Meteor.Error("Not authorized");
        }

        if (user._language !== "") {
            Meteor.users.update({
                _id: user._id
            }, {
                $set: {
                    "profile.language": user._language
                }
            }, callback);
        }
    }
});