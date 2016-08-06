function routerConfig ($stateProvider, $urlRouterProvider) {
	'ngInject';

	$stateProvider
	 	//  // setup an abstract state for the tabs directive
    	// .state('tab', {
		// 	url: '/tab',
		// 	abstract: true,
		// 	templateUrl: 'app/locations/tabs/tabs.html'
		// })

		// Each tab has its own nav history stack:
		.state('restaurants', {
			url: '/restaurants',
			views: {
				restaurants: {
					templateUrl: 'app/locations/restaurants/restaurants.html',
					controller: 'RestaurantCtrl'
				}
			}
		})
		.state('chat', {
			url: '/chat',
			views: {
				chat: {
					templateUrl: 'app/locations/chat/chat.html',
					//controller: 'ChatDetailCtrl'
				}
			}
		})
		.state('settings', {
			url: '/settings',
			views: {
				settings: {
					templateUrl: 'app/locations/settings/settings.html',
					//controller: 'settingsCtrl'
				}
			}
		});

		// if none of the above states are matched, use this as the fallback
		$urlRouterProvider.otherwise('/restaurants');

		// .state('browse', {
		// 	url: '/browse',
		// 	views: {
		// 		browse: {
		// 			templateUrl: 'app/locations/browse/browse.html',
		// 			controller: 'BrowseController as browseCtrl'
		// 		}
		// 	}
		// })
		// .state('help', {
		// 	url: '/help',
		// 	views: {
		// 		help: {
		// 			templateUrl: 'app/locations/help/help.html',
		// 			controller: 'HelpController as helpCtrl'
		// 		}
		// 	}
		// });

		// $urlRouterProvider.otherwise('/browse');
}

export default routerConfig;
