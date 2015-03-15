Meteor.methods({
  addDaily (body, author) {
    dailyUpdates.insert({
      body: body,
      createdAt: new Date(),
      createdBy: author
    });
  },
  removeDaily (dailyId) {
    dailyUpdates.remove(dailyId)
  }
});
