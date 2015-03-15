Template.dailyUpdates.helpers({
  datesWithDailies () {
    let dailies = []

    if(Session.get('showRead')) {
      dailies = dailyUpdates.find({}, { sort: { createdAt: -1} }).fetch();
    }
    else {
      dailies = dailyUpdates.find({isRead: { $ne: true }}, { sort: { createdAt: -1} }).fetch();
    }

    let groupedByDate = _.groupBy(dailies, (daily) => {
      return moment(daily.createdAt).format('YYYY-MM-DD');
    });

    let groupedDates = _.keys(groupedByDate);

    return _.map(groupedDates, (date) => {
      dailiesForDate = groupedByDate[date];

      return {
        date: date,
        dailies: dailiesForDate
      };
    });
  },
  showUnread () {
    return Session.get('showRead');
  }
});
