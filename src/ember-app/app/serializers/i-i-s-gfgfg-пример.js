import { Serializer as ПримерSerializer } from
  '../mixins/regenerated/serializers/i-i-s-gfgfg-пример';
import НаследSerializer from './i-i-s-gfgfg-наслед';

export default НаследSerializer.extend(ПримерSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
