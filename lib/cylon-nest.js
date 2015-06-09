/*
 * cylon-nest
 * http://cylonjs.com
 *
 * Copyright (c) 2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var Adaptor = require("./adaptor");

var Drivers = {
  "nest-thermostat": require("./thermostat"),
  "nest-protect": require("./protect"),
  "nest-home": require("./nest-home")
};

module.exports = {
  adaptors: ["nest"],
  drivers: Object.keys(Drivers),

  adaptor: function(opts) {
    return new Adaptor(opts);
  },

  driver: function(opts) {
    for (var driver in Drivers) {
      if (opts.driver === driver) {
        return new Drivers[driver](opts);
      }
    }

    return null;
  }
};
