Meteor.methods({
  addDaily: function (body, author) {
    dailyUpdates.insert({
      body: body,
      createdAt: new Date(),
      createdBy: author
    });
  },
  removeDaily: function (dailyId) {
    dailyUpdates.remove(dailyId)
  }
});
