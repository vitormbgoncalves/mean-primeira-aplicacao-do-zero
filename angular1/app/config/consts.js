angular.module('Smartgestor Agro').constant('consts', {
  appName: 'Smartgestor Agro',
  version: '1.0',
  owner: 'Vitor Gonçalves',
  year: '2020',
  site: 'http://smartgestor.app',
  apiUrl: 'http://localhost:3003/api',
  oapiUrl: 'http://localhost:3003/oapi',
  userKey: '_smartgestor_agro_user'
}).run(['$rootScope', 'consts', function ($rootScope, consts) {
  $rootScope.consts = consts
}])