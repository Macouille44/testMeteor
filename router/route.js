Router.configure({
    layoutTemplate: 'index'
});

Router.route('/', function () {
    this.layout('index');
});

Router.route('/users', function () {
    this.render('users');
});


Router.route('/user/:username', function () {
    this.render('user', {
        data: function () {
            return Meteor.users.findOne({
                username: this.params.username
            });
        }
    });
});
