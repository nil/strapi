'use strict';

/**
 * post-test controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::post-test.post-test');
