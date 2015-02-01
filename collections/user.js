User = function (id, name, language) {
    this._id = id;
    this._name = name;
    this._language = language;
}

User.prototype = {
    get id() {
        return this._id;
    },
    get name() {
        return this._name;
    },
    get language() {
        return this._language;
    },
    save: function (callback) {
        if (this._id) {
            Meteor.call("updateUser", this, callback);
        }
    }
}