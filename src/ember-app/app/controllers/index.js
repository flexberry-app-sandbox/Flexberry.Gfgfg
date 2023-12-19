import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.gfgfg.caption'),
          title: i18n.t('forms.application.sitemap.gfgfg.title'),
          children: [{
            link: 'i-i-s-gfgfg-наслед-l',
            caption: i18n.t('forms.application.sitemap.gfgfg.i-i-s-gfgfg-наслед-l.caption'),
            title: i18n.t('forms.application.sitemap.gfgfg.i-i-s-gfgfg-наслед-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-gfgfg-пример-l',
            caption: i18n.t('forms.application.sitemap.gfgfg.i-i-s-gfgfg-пример-l.caption'),
            title: i18n.t('forms.application.sitemap.gfgfg.i-i-s-gfgfg-пример-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-gfgfg-прикол-l',
            caption: i18n.t('forms.application.sitemap.gfgfg.i-i-s-gfgfg-прикол-l.caption'),
            title: i18n.t('forms.application.sitemap.gfgfg.i-i-s-gfgfg-прикол-l.title'),
            icon: 'building',
            children: null
          }]
        }
      ]
    };
  }),
})