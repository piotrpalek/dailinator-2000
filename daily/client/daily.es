Template.daily.events({
  'click .delete' () {
    Meteor.call('removeDaily', this._id);
  },
  'click .mark-as-read' () {
    Meteor.call('markDailyAsRead', this._id);
  }
});
