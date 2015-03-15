Meteor.methods({
  addDaily (body, author) {
    dailyUpdates.insert({
      body: body,
      createdAt: new Date(),
      createdBy: author,
      isRead: false
    });
  },
  removeDaily (dailyId) {
    dailyUpdates.remove(dailyId)
  },
  markDailyAsRead (dailyId) {
    dailyUpdates.update(dailyId, { isRead: true });
  }
});
