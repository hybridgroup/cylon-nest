/*
 * cylon-nest
 * http://cylonjs.com
 *
 * Copyright (c) 2014 Your Name Here
 * Your License Here
*/

'use strict';

var Cylon = require('cylon');

var Adaptor = require('./adaptor'),
    Thermostat = require('./thermostat');

module.exports = {
  adaptor: function(opts) {
    return new Adaptor(opts);
  },

  driver: function(opts) {
    return new Thermostat(opts);
  },

  register: function(robot) {
    robot.registerAdaptor('cylon-nest', 'nest');
    robot.registerDriver('cylon-nest', 'thermostat');
  }
};
