import Ember from 'ember';

export default Ember.Component.extend({
  favorites: Ember.inject.service(),
  actions: {
    favorite(recipe) {
      this.get('favorites').add(recipe);
    }
  }
});
