import { Serializer as ПриколSerializer } from
  '../mixins/regenerated/serializers/i-i-s-gfgfg-прикол';
import НаследSerializer from './i-i-s-gfgfg-наслед';

export default НаследSerializer.extend(ПриколSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
