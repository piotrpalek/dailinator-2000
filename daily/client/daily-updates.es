Template.dailyUpdates.events({
  'change .hide-read-dailies input' (e) {
    Session.set('showUnread', e.target.checked);
  }
});
