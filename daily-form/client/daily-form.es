Template.dailyForm.events({
  'submit .daily-form' (event) {
    let body = event.target.body;
    let author = event.target.author;
    let projectId = event.target.projectId;

    Meteor.call('addDaily', projectId.value, body.value, author.value);

    body.value = '';
    author.value = '';

    return false;
  }
});
