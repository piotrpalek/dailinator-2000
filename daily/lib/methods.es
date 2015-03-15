Meteor.methods({
  addDaily (project_id, body, author) {
    dailyUpdates.insert({
      body: body,
      createdAt: new Date(),
      createdBy: author,
      isRead: false,
      project_id: project_id
    });
  },
  removeDaily (dailyId) {
    dailyUpdates.remove(dailyId)
  },
  markDailyAsRead (dailyId) {
    dailyUpdates.update(dailyId, { $set: { isRead: true } });
  }
});
