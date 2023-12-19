import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  тит: DS.attr('string')
});

export let ValidationRules = {
  тит: {
    descriptionKey: 'models.i-i-s-gfgfg-наслед.validations.тит.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('НаследE', 'i-i-s-gfgfg-наслед', {
    тит: attr('Тит', { index: 0 })
  });

  modelClass.defineProjection('НаследL', 'i-i-s-gfgfg-наслед', {
    тит: attr('Тит', { index: 0 })
  });
};
