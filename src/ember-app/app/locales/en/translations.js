import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISGfgfgНаследLForm from './forms/i-i-s-gfgfg-наслед-l';
import IISGfgfgПриколLForm from './forms/i-i-s-gfgfg-прикол-l';
import IISGfgfgПримерLForm from './forms/i-i-s-gfgfg-пример-l';
import IISGfgfgНаследEForm from './forms/i-i-s-gfgfg-наслед-e';
import IISGfgfgПриколEForm from './forms/i-i-s-gfgfg-прикол-e';
import IISGfgfgПримерEForm from './forms/i-i-s-gfgfg-пример-e';
import IISGfgfgНаследModel from './models/i-i-s-gfgfg-наслед';
import IISGfgfgПриколModel from './models/i-i-s-gfgfg-прикол';
import IISGfgfgПримерModel from './models/i-i-s-gfgfg-пример';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-gfgfg-наслед': IISGfgfgНаследModel,
    'i-i-s-gfgfg-прикол': IISGfgfgПриколModel,
    'i-i-s-gfgfg-пример': IISGfgfgПримерModel
  },

  'application-name': 'Gfgfg',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Gfgfg',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Gfgfg',
          title: 'Gfgfg'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        gfgfg: {
          caption: 'Gfgfg',
          title: 'Gfgfg',
          'i-i-s-gfgfg-наслед-l': {
            caption: 'Наслед',
            title: ''
          },
          'i-i-s-gfgfg-пример-l': {
            caption: 'Пример',
            title: ''
          },
          'i-i-s-gfgfg-прикол-l': {
            caption: 'Прикол',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-gfgfg-наслед-l': IISGfgfgНаследLForm,
    'i-i-s-gfgfg-прикол-l': IISGfgfgПриколLForm,
    'i-i-s-gfgfg-пример-l': IISGfgfgПримерLForm,
    'i-i-s-gfgfg-наслед-e': IISGfgfgНаследEForm,
    'i-i-s-gfgfg-прикол-e': IISGfgfgПриколEForm,
    'i-i-s-gfgfg-пример-e': IISGfgfgПримерEForm
  },

});

export default translations;
