import Ember from 'ember';

export default Ember.Component.extend({
  commentForm: false,

  actions: {
    commentForm() {
      this.set('commentForm', true);
    },
    newComment() {
      var params = {
        username: this.get('username'),
        rating: parseInt(this.get('rating')),
        comment: this.get('comment'),
        recipe: this.get('recipe'),
      };
      this.set('username', "");
      this.set('rating', "");
      this.set('comment', "");
      this.sendAction('newComment', params);
    }
  }
});
