// 'use strict'
require('dotenv').config();

const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  OKTA_CLIENT: `"${process.env.VUE_APP_OKTA_CLIENT}"`,
  OKTA_URI_BASE: `"${process.env.VUE_APP_OKTA_URI_BASE}"`,
});
