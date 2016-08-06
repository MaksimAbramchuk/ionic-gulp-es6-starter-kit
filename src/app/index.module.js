import config from './index.config';

import routerConfig from './index.route';

import runBlock from './index.run';

import RestaurantCtrl from './locations/restaurants/restaurants.controller';

angular.module('ionicFirstApp', ['ionic', 'ui.router'])
  .config(config)

  .config(routerConfig)

  .run(runBlock)
  
  .controller('RestaurantCtrl', RestaurantCtrl);
