'use strict';

function runBlock($log, $rootScope) {
	'ngInject';
	$rootScope.$on('test:event', (e) => {
		$log.info('test:event triggered', e);
	});
	$log.debug('Hello from run block!');
}

export default runBlock;
