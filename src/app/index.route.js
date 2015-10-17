function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
    .state('browse', {
      url: '/browse',
      views: {
        browse: {
          templateUrl: 'app/locations/browse/browse.html',
          controller: 'BrowseController',
          controllerAs: 'browseCtrl'
        }
      }
    })
    .state('help', {
      url: '/help',
      views: {
        help: {
          templateUrl: 'app/locations/help/help.html',
          controller: 'HelpController',
          controllerAs: 'helpCtrl'
        }
      }
    });

  $urlRouterProvider.otherwise('/browse')
}

export default routerConfig;
