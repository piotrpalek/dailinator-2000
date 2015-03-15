Template.dailyForm.events({
  'submit .daily-form' (event) {
    let body = event.target.body;
    let author = event.target.author;

    Meteor.call('addDaily', body.value, author.value)

    body.value = '';
    author.value = '';

    return false;
  }
});
