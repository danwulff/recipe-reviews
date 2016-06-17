import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      recipes: this.store.findAll('recipe'),
      reviews: this.store.findAll('review')
    });
  },
  actions: {
    newRecipe(params) {
      var newRecipe = this.store.createRecord('recipe', params);
      newRecipe.save();
      this.transitionTo('admin');
    }
  }
});
