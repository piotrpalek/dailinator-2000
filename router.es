Router.onBeforeAction(function() {
  if (! Meteor.userId()) {
    this.render('login');
  } else {
    this.next();
  }
});

Router.configure({
  layoutTemplate: 'applicationLayout'
});

Router.route('/projects/:_id/dailies', function () {
  this.render('dailies', {
    data: function() {
      return {
        datesWithDailies: () => {
          let dailies = [];
          let ownerId = Meteor.userId();
          let projectId = this.params._id;

          if(Session.get('showRead')) {
            dailies = dailyUpdates.find({project_id: projectId}, { sort: { createdAt: -1} }).fetch();
          }
          else {
            dailies = dailyUpdates.find({project_id: projectId, isRead: { $ne: true }}, { sort: { createdAt: -1} }).fetch();
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
        getData: () => {
          let projectId = this.params._id;

          return {
            project_id: projectId
          };
        },
        showRead: () => {
          return Session.get('showRead');
        }
      }
    }
  });
}, { name: 'dailies.index'} );

Router.route('/projects/:project_id/dailies/new', function () {
  this.render('newDaily', {
    data: function() {
      return {
        projectId: this.params.project_id
      };
    }
  });
}, { name: 'dailies.new'} );

Router.route('/projects/new', function () {
  this.render('newProject');
});

Router.route('/', function () {
  this.render('projects', {
    data: function() {
      return {
        projects: function() {
          let ownerId = Meteor.userId();
          return Projects.find({ owner_id: ownerId });
        }
      }
    }
  });
});

Router.route('/projects/:_id', function () {
  this.render('project', {
    data: {
      project: function() {
        let ownerId = Meteor.userId();
        return Projects.findOne({ owner_id: ownerId });
      }
    }
  });
});
