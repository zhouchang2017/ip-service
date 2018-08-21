'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/api/resolve', controller.home.index);
  router.get('/api/is_abroad',controller.home.isAbroad);
};
