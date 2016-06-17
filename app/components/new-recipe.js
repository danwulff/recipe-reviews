import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    newRecipe() {
      var params = {
        title: this.get('title'),
        ingredients: this.get('ingredients'),
        directions: this.get('directions')
      };
      this.set('title', "");
      this.set('ingredients', "");
      this.set('directions', "");
      this.sendAction('newRecipe', params);
    }
  }
});
