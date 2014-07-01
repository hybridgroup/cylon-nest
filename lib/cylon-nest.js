/*
 * cylon-nest
 * http://cylonjs.com
 *
 * Copyright (c) 2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

'use strict';

var Cylon = require('cylon');

var Adaptor = require('./adaptor'),
    Thermostat = require('./thermostat'),
    Nest = require('./nest-home');

module.exports = {
  adaptor: function(opts) {
    return new Adaptor(opts);
  },

  driver: function(opts) {
    switch(opts.name) {
      case 'nest-thermostat':
        return new Thermostat(opts);
      case 'nest-home':
        return new Nest(opts);
      default:
        return null;
    }

  },

  register: function(robot) {
    robot.registerAdaptor('cylon-nest', 'nest');
    robot.registerDriver('cylon-nest', 'nest-thermostat');
    robot.registerDriver('cylon-nest', 'nest-home');
  }
};
