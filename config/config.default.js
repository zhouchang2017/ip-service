'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1534838426087_4216';

  // add your config here
  config.middleware = ['errorHandler'];

  return config;
};


exports.cluster = {
  listen: {
    port: 7001,
    hostname: '127.0.0.1',
    // path: '/var/run/egg.sock',
  }
}
