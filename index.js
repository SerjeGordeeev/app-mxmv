const angular = require('angular');
const _ = require('lodash');

require("normalize.css");
require("./styles/styles.scss");


require("angular-ui-router");
require("angular-animate");
require("angular-aria");
require("angular-cookies");
require("restangular");
require("angular-md5");

require("angular-material");
require("angular-material/angular-material.css");

require("angular-material-data-table/dist/md-data-table.min.js");
require("angular-material-data-table/dist/md-data-table.min.css");

require("v-accordion");
require("v-accordion/dist/v-accordion.css");

require("./vendor/ng-mask/ngMask.min");


require("./components/backend");
require("./components/root");
require("./components/auth");
require("./components/home");
require("./components/tickets");
require("./components/common");
require("./components/admin");
require("./components/workers");
require("./components/reports");
require("./components/testing");

const App = angular.module('app',
	[
		"ui.router",
		"ngMaterial",
		"vAccordion",
		"ngAnimate",
		"md.data.table",
		"ngMask",
		"ngCookies",
		"app.backend",
		"app.common",
		"app.root",
		"app.auth",
		"app.home",
		"app.tickets",
		"app.admin",
		"app.workers",
		"app.reports",
		"app.testing"
	]);

App.config(function ($stateProvider, $locationProvider, $urlRouterProvider, flashAlertProvider, $mdDateLocaleProvider, $mdThemingProvider) {
	
	flashAlertProvider.setAlertTime(3000);
	$urlRouterProvider.otherwise('/');
	/*$locationProvider.html5Mode(true);*/
	    // Example of a French localization.

	$mdThemingProvider.definePalette('leader', {
	  '50': 'fdf8e6',
	  '100': 'fbedc2',
	  '200': 'f8e199',
	  '300': 'f5d470',
	  '400': 'f3cb51',
	  '500': 'f1c232',
	  '600': 'efbc2d',
	  '700': 'edb426',
	  '800': 'ebac1f',
	  '900': 'e79f13',
	  'A100': 'ffffff',
	  'A200': 'fff4e2',
	  'A400': 'ffe2af',
	  'A700': 'ffd896',
	  'contrastDefaultColor': 'light',
	  'contrastDarkColors': [
	    '50',
	    '100',
	    '200',
	    '300',
	    '400',
	    '500',
	    '600',
	    '700',
	    '800',
	    '900',
	    'A100',
	    'A200',
	    'A400',
	    'A700'
	  ],
	  'contrastLightColors': []
	});    

	$mdThemingProvider.theme('default')
		.primaryPalette('leader')
		// .warnPalette('red')
		// .accentPalette('salat');

    $mdDateLocaleProvider.months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
    $mdDateLocaleProvider.shortMonths = ['янв', 'февр', 'мрт', 'апр', 'май', 'июн', 'июл', 'авг', 'сент', 'окт', 'нбр', 'дкбр'];
    $mdDateLocaleProvider.days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    $mdDateLocaleProvider.shortDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

    // Can change week display to start on Monday.
    //$mdDateLocaleProvider.firstDayOfWeek = 1;

    $mdDateLocaleProvider.msgCalendar = 'Календарь';
    //$mdDateLocaleProvider.msgOpenCalendar = 'Ouvrir le calendrier';
});





App.run(($rootScope, $state, $document, Sessions, Auth)=>{

	$rootScope.appName = "Тест 'Лидерство'";
	$document[0].title = $rootScope.appName;
	$rootScope.isAuth = Auth.isAuth();
/*	if(!$rootScope.isAuth && _.includes($state.current.name,"home")){
		$state.transitionTo('auth.signIn')
	}*/
	
})