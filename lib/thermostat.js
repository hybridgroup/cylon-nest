/*
 * cylon-nest driver
 * http://cylonjs.com
 *
 * Copyright (c) 2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var Cylon = require("cylon");
var Commands = require("./commands/thermostat");
var Utils = require("./utils");

var Thermostat = module.exports = function Thermostat(opts) {
  Thermostat.__super__.constructor.apply(this, arguments);

  this.deviceId = opts.deviceId;
  this.deviceKey = "devices/thermostats/" + this.deviceId;
  this.type = "Thermostat";

  this.commands = {
    read: this.read,
    write: this.write
  };
};

Cylon.Utils.subclass(Thermostat, Cylon.Driver);

Thermostat.prototype.start = function(callback) {
  this.connection.on("value", function(snapshoot) {
    this.thermostat = snapshoot.val().devices.thermostats[this.deviceId];
    Utils.setupCommands(Commands, this.thermostat, this);
    this.emit("status", this.thermostat);
  }.bind(this));

  callback();
};

Thermostat.prototype.halt = function(callback) {
  callback();
};

Thermostat.prototype.read = function(key, callback) {
  var drCallback = function(err, data) {
    if (err) {
      this.emit("error", err);
    } else {
      this.emit("read", data);
    }

    if (typeof callback === "function") {
      callback(err, data);
    }
  }.bind(this);

  this.connection.read(this.deviceKey + "/" + key, drCallback);
};

Thermostat.prototype.write = function(key, value, callback) {
  this.connection.write(this.deviceKey + "/" + key, value, callback);
};

