/*
 * cylon-nest driver
 * http://cylonjs.com
 *
 * Copyright (c) 2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

'use strict';

var Cylon = require('cylon');

var Thermostat = module.exports = function Thermostat(opts) {
  Thermostat.__super__.constructor.apply(this, arguments);
  this.deviceId = opts.extraParams.deviceId;
  this.deviceKey = 'thermostats/' + this.deviceId;
};

Cylon.Utils.subclass(Thermostat, Cylon.Driver);

Thermostat.prototype.commands = [
  'deviceName', 'ambientTemperatureF', 'ambientTemperatureC',
  'targetTemperatureF', 'targetTemperatureC', 'setTargetTemperatureF',
  'setTargetTemperatureC'
];

Thermostat.prototype.start = function(callback) {
  var self = this;

  this.connection.on('value', function(snapshoot) {
    self.thermostat = snapshoot.val().devices.thermostats[self.deviceId];

    self.device.emit('value', self.thermostat);
  });

  Thermostat.__super__.start.apply(this, arguments);
};

Thermostat.prototype.deviceName = function() {
  //this.connection.read("name");
  return this.thermostat.name;
};

Thermostat.prototype.ambientTemperatureF = function() {
  //this.connection.read(this.deviceKey + "ambient_temperature_f");
  return this.thermostat.ambient_temperature_f;
};

Thermostat.prototype.ambientTemperatureC = function() {
  //this.connection.read(this.deviceKey + "ambient_temperature_c");
  return this.thermostat.ambient_temperature_c;
};

Thermostat.prototype.targetTemperatureF = function() {
  //this.connection.read(this.deviceKey + "target_temperature_f");
  return this.thermostat.target_temperature_f;
};

Thermostat.prototype.targetTemperatureC = function() {
  //this.connection.read(this.deviceKey + "target_temperature_c");
  return this.thermostat.target_temperature_c;
};

Thermostat.prototype.setTargetTemperatureF = function(value) {
  this.connection.write(this.deviceKey + "/target_temperature_f", value);
};

Thermostat.prototype.setTargetTemperatureC = function(value) {
  this.connection.write(this.deviceKey + "/target_temperature_c", value);
};
