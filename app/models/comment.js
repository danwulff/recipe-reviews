import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  rating: DS.attr(),
  comment: DS.attr(),
  recipe: DS.belongsTo('recipe', {async: true}),
});
