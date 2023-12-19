import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-gfgfg-наслед-l');
  this.route('i-i-s-gfgfg-наслед-e',
  { path: 'i-i-s-gfgfg-наслед-e/:id' });
  this.route('i-i-s-gfgfg-наслед-e.new',
  { path: 'i-i-s-gfgfg-наслед-e/new' });
  this.route('i-i-s-gfgfg-прикол-l');
  this.route('i-i-s-gfgfg-прикол-e',
  { path: 'i-i-s-gfgfg-прикол-e/:id' });
  this.route('i-i-s-gfgfg-прикол-e.new',
  { path: 'i-i-s-gfgfg-прикол-e/new' });
  this.route('i-i-s-gfgfg-пример-l');
  this.route('i-i-s-gfgfg-пример-e',
  { path: 'i-i-s-gfgfg-пример-e/:id' });
  this.route('i-i-s-gfgfg-пример-e.new',
  { path: 'i-i-s-gfgfg-пример-e/new' });
});

export default Router;
