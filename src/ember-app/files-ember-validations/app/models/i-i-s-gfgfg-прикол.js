import {
  defineNamespace,
  defineBaseModel,
  defineProjections,
  Model as ПриколMixin
} from '../mixins/regenerated/models/i-i-s-gfgfg-прикол';

import НаследModel from './i-i-s-gfgfg-наслед';

let Model = НаследModel.extend(ПриколMixin, {
});

defineNamespace(Model);
defineBaseModel(Model);
defineProjections(Model);

export default Model;
