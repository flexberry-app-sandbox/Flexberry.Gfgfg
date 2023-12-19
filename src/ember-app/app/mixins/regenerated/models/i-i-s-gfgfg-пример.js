import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  строка: DS.attr('string')
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-gfgfg-пример.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  строка: {
    descriptionKey: 'models.i-i-s-gfgfg-пример.validations.строка.__caption__',
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
  modelClass.defineProjection('ПримерE', 'i-i-s-gfgfg-пример', {
    строка: attr('Строка', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    тит: attr('Тит', { index: 2 })
  });

  modelClass.defineProjection('ПримерL', 'i-i-s-gfgfg-пример', {
    строка: attr('Строка', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    тит: attr('Тит', { index: 2 })
  });
};
