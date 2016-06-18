import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  image: DS.attr(),
  ingredients: DS.attr(),
  directions: DS.attr(),
  comments: DS.hasMany('comment', {async: true})
});
