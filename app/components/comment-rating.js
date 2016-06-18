import Ember from 'ember';

export default Ember.Component.extend({
  averageRating: Ember.computed('recipe.[].comments', function() {
    var total = 0;
    var comments = this.get('recipe.comments');

    comments.forEach(function(comment) {
      console.log("comment: " + comment.comment);
      console.log("rating: " + comment.rating);
      console.log("username: " + comment.username);

      total = total + comment.rating;
    });

    // console.log(total);

    return total;
  })
});
