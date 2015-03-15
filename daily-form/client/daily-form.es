Template.dailyForm.events({
  'submit .daily-form' (event) {
    let body = event.target.body;

    Meteor.call('addDaily', body.value)
    body.value = '';

    return false;
  }
});
