'use strict';

/**
 * post-test service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::post-test.post-test');
