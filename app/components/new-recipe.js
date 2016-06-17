import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    newRecipe() {
      var params = {
        title: this.get('title'),
        image: this.get('image'),
        ingredients: this.get('ingredients'),
        directions: this.get('directions')
      };
      this.set('title', "");
      his.set('image', "");
      this.set('ingredients', "");
      this.set('directions', "");
      this.sendAction('newRecipe', params);
    }
  }
});
