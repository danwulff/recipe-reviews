import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  add(addedItem) {
    var found = false;
    this.get('items').forEach(function(instance) {
      if (instance === addedItem) {
        found = true;
        return;
      }
    });
    if(!found) {
      this.get('items').pushObject(addedItem);
    }
  }
});
