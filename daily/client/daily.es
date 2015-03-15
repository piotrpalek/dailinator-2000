Template.daily.events({
  'click .delete' () {
    Meteor.call('removeDaily', this._id);
  }
});
