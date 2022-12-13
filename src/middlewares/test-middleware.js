'use strict';

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    // strapi.log.info('In application test-middleware middleware.');

    await next();
  };
};
