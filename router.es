Router.configure({
  layoutTemplate: 'applicationLayout'
});

Router.route('/', function () {
  this.render('dailies');
});

Router.route('/dailies/new', function () {
  this.render('newDaily');
});
