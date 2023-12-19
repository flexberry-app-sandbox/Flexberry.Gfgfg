import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-gfgfg-пример', 'Unit | Serializer | i-i-s-gfgfg-пример', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-gfgfg-пример',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-gfgfg-наслед',
    'model:i-i-s-gfgfg-прикол',
    'model:i-i-s-gfgfg-пример',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
