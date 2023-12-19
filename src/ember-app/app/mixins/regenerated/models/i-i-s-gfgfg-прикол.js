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
    descriptionKey: 'models.i-i-s-gfgfg-прикол.validations.тит.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-gfgfg-наслед'
  });
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПриколE', 'i-i-s-gfgfg-прикол', {
    тит: attr('Тит', { index: 0 })
  });

  modelClass.defineProjection('ПриколL', 'i-i-s-gfgfg-прикол', {
    тит: attr('Тит', { index: 0 })
  });
};
