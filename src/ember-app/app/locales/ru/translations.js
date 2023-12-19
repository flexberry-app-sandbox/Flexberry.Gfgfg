import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Gfgfg',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Gfgfg',
          title: 'Gfgfg'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
