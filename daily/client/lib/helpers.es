Template.dailyUpdates.helpers({
  dailies () {
    return dailyUpdates.find({}, { sort: { createdAt: -1} });
  }
});
