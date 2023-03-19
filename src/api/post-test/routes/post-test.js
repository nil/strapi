'use strict';

/**
 * post-test router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::post-test.post-test');
