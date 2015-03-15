Template.newProject.events({
  'submit .project-form' (event) {
    let name = event.target.name;

    Meteor.call('addProject', name.value);

    name.value = '';

    return false;
  }
});
