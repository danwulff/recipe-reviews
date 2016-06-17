import Ember from 'ember';

export default Ember.Component.extend({
  selectedRecipe: null,

  actions: {
    showRecipe(recipe) {
      this.set('selectedRecipe', recipe);
    },
    updateRecipe(recipe, params) {
      console.log("list update");
      this.sendAction('updateRecipe', recipe, params);
    },
    deleteRecipe(recipe) {
      console.log("list delete");
      this.set('selectedRecipe', null);
      this.sendAction('deleteRecipe', recipe);
    }
  }
});
