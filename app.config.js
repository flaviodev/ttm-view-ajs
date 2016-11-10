var app = angular.module('app', ['ngRoute','ngTable','ngMaterial','gettext','tmh.dynamicLocale']);

var $=jQuery;
var controlLayerService = '';


app.run(function (gettextCatalog,tmhDynamicLocale) {
	tmhDynamicLocale.set('en-us');
	gettextCatalog.setCurrentLanguage('en');
    gettextCatalog.debug = true;
});

app.config(function(tmhDynamicLocaleProvider) {
  tmhDynamicLocaleProvider.localeLocationPattern('vendor/flaviodev/ttm-view-ajs/app/locales/angular-locale_{{locale}}.js');
});
