'use strict';


import * as _ from 'lodash/core';




function MainController($log, $rootScope, $scope, $document) {
  'ngInject';

  $log.debug('Hello from main controller!');

  this.$document = $document;
	this.lodash_version = _.VERSION;

  this.triggerEventFromRoot = () => {
    $log.debug('triggerEventFromRoot exec');
    $rootScope.$emit('test:event');
  }

  this.triggerEventFromCurrent = () => {
    $log.debug('triggerEventFromCurrent exec');
    $scope.$emit('test:event');
  }

  const self = this;
  angular.element(() => {
    const root = self.$document[0].querySelector('#rootBtn');
    angular.element(root).on('click', self.triggerEventFromRoot);

    const current = self.$document[0].querySelector('#currentBtn');
    angular.element(current).on('click', self.triggerEventFromCurrent);
  });

  
}

export default MainController;
