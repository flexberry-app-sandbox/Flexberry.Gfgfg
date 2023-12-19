import {
  defineNamespace,
  defineBaseModel,
  defineProjections,
  Model as ПримерMixin
} from '../mixins/regenerated/models/i-i-s-gfgfg-пример';

import НаследModel from './i-i-s-gfgfg-наслед';

let Model = НаследModel.extend(ПримерMixin, {
});

defineNamespace(Model);
defineBaseModel(Model);
defineProjections(Model);

export default Model;
