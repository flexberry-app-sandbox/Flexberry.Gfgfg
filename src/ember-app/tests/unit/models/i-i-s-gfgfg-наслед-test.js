import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-gfgfg-наслед', 'Unit | Model | i-i-s-gfgfg-наслед', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-gfgfg-наслед',
    'model:i-i-s-gfgfg-прикол',
    'model:i-i-s-gfgfg-пример',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
