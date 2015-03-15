Template.dailyUpdates.events({
  'change .show-read-dailies input' (e) {
    Session.set('showRead', e.target.checked);
  }
});
