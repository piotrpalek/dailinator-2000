let dailyUpdates = new Mongo.Collection("dailyUpdates")

if (Meteor.isClient) {
  Template.dailyUpdates.helpers({
    dailies () {
      return dailyUpdates.find({}, { sort: { createdAt: -1} });
    }
  });

  Template.dailyForm.events({
    'submit .daily-form' (event) {
      let body = event.target.body;

      Meteor.call('addDaily', body.value)
      body.value = '';

      return false;
    }
  });

  Template.daily.events({
    'click .delete' () {
      Meteor.call('removeDaily', this._id);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup( () => {
    // code to run on server at startup
  });
}

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
