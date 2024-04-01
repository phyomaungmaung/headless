'use strict';

/**
 * mtg service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mtg.mtg');
