import Ember from 'ember';

export default Ember.Component.extend({
  averageRating: Ember.computed('comments', function() {
    var total = 0;

    var commentsTemp = this.get('comments');

    commentsTemp.forEach(function(comment) {
      total = total + comment.rating;
    });

    console.log(total);

    return 2;
  })
});
