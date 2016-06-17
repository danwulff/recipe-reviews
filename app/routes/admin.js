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
    },
    updateRecipe(recipe, params) {
      console.log("admin update");
      Object.keys(params).forEach(function(key) {
        if (params[key]!== undefined) {
          recipe.set(key, params[key]);
        }
      });
      recipe.save();
      this.transitionTo('admin');
    },
    deleteRecipe(recipe) {
      console.log("admin delete");
      recipe.destroyRecord();
      this.transitionTo('admin');
    }
  }
});
