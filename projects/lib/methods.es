Meteor.methods({
  addProject (name) {
    Projects.insert({
      name: name,
      owner_id: Meteor.userId()
    });
  }
});
