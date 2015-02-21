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

      dailyUpdates.insert({
        body: body.value,
        createdAt: new Date()
      });

      body.value = '';

      return false;
    }
  });

  Template.daily.events({
    'click .delete' () {
      dailyUpdates.remove(this._id);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup( () => {
    // code to run on server at startup
  });
}
