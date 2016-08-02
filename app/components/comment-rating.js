import Ember from 'ember';

export default Ember.Component.extend({
  averageRating: Ember.computed('recipe.@each.comments', function() {
    var total = 0;
    var amount = 0;

    var comments = this.get('recipe.comments');
    comments.then(function() {
      amount = comments.get('length');

      comments.forEach(function(comment) {
        total = total + comment.get('rating');
      });

      console.log("return: " + (total / amount));
      return (total / amount);
    });

  })
});
