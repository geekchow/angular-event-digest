'use strict';


import * as _ from 'lodash/core';




function MainController($log) {
  'ngInject';

  $log.debug('Hello from main controller!');


	this.lodash_version = _.VERSION;




}

export default MainController;
