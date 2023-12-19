import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as НаследMixin
} from '../mixins/regenerated/models/i-i-s-gfgfg-наслед';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(НаследMixin, Validations, {
});

defineProjections(Model);

export default Model;
