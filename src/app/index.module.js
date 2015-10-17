import config from './index.config';

import routerConfig from './index.route';

import runBlock from './index.run';

import BrowseController from './locations/browse/browse.controller';
import HelpController from './locations/help/help.controller';

angular.module('angularGulpIonicBoilerplate', ['ionic', 'ui.router'])
  .config(config)

  .config(routerConfig)

  .run(runBlock)

  .controller('BrowseController', BrowseController)
  .controller('HelpController', HelpController);
