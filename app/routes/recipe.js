import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      recipe: this.store.findRecord('recipe', params.recipe_id),
    });
  },
  actions: {
    newComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var recipe = params.recipe;
      recipe.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return recipe.save();
      });
      this.transitionTo('recipe', params.recipe.id);
    }
  }
});
