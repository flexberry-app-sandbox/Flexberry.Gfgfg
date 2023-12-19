import $ from 'jquery';
import { buildValidations } from 'ember-cp-validations';

import {
  defineBaseModel,
  defineProjections,
  ValidationRules,
  Model as ПриколMixin
} from '../mixins/regenerated/models/i-i-s-gfgfg-прикол';

import НаследModel from './i-i-s-gfgfg-наслед';
import { ValidationRules as ParentValidationRules } from '../mixins/regenerated/models/i-i-s-gfgfg-наслед';

const Validations = buildValidations($.extend({}, ParentValidationRules, ValidationRules), {
  dependentKeys: ['model.i18n.locale'],
});

let Model = НаследModel.extend(ПриколMixin, Validations, {
});

defineBaseModel(Model);
defineProjections(Model);

export default Model;
