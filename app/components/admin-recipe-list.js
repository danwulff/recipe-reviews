import Ember from 'ember';

export default Ember.Component.extend({
  selectedRecipe: null,

  actions: {
    showRecipe(recipe) {
      this.set('selectedRecipe', recipe);
    }
  }
});
