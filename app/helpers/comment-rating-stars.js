import Ember from 'ember';

export function commentRatingStars(params) {

  var commentRating = params[0];

  if (commentRating === 5) {  //5 stars
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span>');
  } else if (commentRating >= 4.5) {  //4 1/2 stars
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span>1/2');
  } else if (commentRating >= 4.0) { //4 stars
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span>');
  } else if (commentRating >= 3.5) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span>1/2');
  } else if (commentRating >= 3.0) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span>');
  } else if (commentRating >= 2.5) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span>1/2');
  } else if (commentRating >= 2.0) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span>');
  } else if (commentRating >= 1.5) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span>1/2');
  } else if (commentRating >= 1.0) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span>');
  } else if (commentRating >= 0.5) {
    return Ember.String.htmlSafe('1/2');
  } else if (commentRating > 0) { //empty star for very low ratings
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star-empty"></span>');
  } else {
    return Ember.String.htmlSafe('-no rating(s)-');
  }
}

export default Ember.Helper.helper(commentRatingStars);
