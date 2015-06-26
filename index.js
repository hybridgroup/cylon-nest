"use strict";

var Adaptor = require("./lib/adaptor");

var Drivers = {
  "nest-thermostat": require("./lib/thermostat"),
  "nest-protect": require("./lib/protect"),
  "nest-home": require("./lib/nest-home")
};

module.exports = {
  adaptors: ["nest"],
  drivers: Object.keys(Drivers),

  adaptor: function(opts) {
    return new Adaptor(opts);
  },

  driver: function(opts) {
    if (Drivers[opts.driver]) {
      return new Drivers[opts.driver](opts);
    }

    return null;
  }
};
