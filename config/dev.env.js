// 'use strict'
require('dotenv').config();

const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  OKTA_CLIENT: '"0oahqajr5iKCjYUO1356"',
  OKTA_URI_BASE: '"https://dev-696620.okta.com"',
});
