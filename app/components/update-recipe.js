import Ember from 'ember';

export default Ember.Component.extend({
  updateForm: false,

  actions: {
    updateForm() {
      this.set('updateForm', true);
    },
    updateRecipe(recipe) {
      console.log("update update");
      var params = {
        title: this.get('newTitle'),
        ingredients: this.get('newIngredients'),
        directions: this.get('newDirections')
      };
      this.set('updateForm', false);
      this.sendAction('updateRecipe', recipe, params);
    },
    deleteRecipe(recipe) {
      console.log("update delete");
      this.set('updateForm', false);
      this.sendAction('deleteRecipe', recipe);
    }
  }
});
