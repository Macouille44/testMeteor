Meteor.startup(function () {
    if (Languages.find().count() === 0) {
        Languages.insert({
            name: "English",
            code: "en"
        });
        Languages.insert({
            name: "Français",
            code: "fr"
        });
    }
});
