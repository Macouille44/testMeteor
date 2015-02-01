User = function (id, name, language) {
    this._id = id;
    this._name = name;
    this._language = language;

    this.save = function (callback) {
        if (this._id) {
            Meteor.call("updateUser", this, callback);
        }
    }
}