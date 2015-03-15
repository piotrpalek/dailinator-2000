Template.dailyUpdates.helpers({
  datesWithDailies () {
    let dailies = dailyUpdates.find({}, { sort: { createdAt: -1}, isRead: { $ne: true } }).fetch();

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
  }
});
