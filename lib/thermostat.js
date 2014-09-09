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
  this.deviceKey = 'devices/thermostats/' + this.deviceId;

  this.commands = {
    device_name: this.deviceName,

    ambient_temperature_f: this.ambientTemperatureF,
    ambient_temperature_c: this.ambientTemperatureC,

    target_temperature_f: this.targetTemperatureF,
    target_temperature_c: this.targetTemperatureC,

    set_target_temperature_f: this.setTargetTemperatureF,
    set_target_temperature_c: this.setTargetTemperatureC,

    read: this.read,
    write: this.write
  }
};

Cylon.Utils.subclass(Thermostat, Cylon.Driver);

Thermostat.prototype.start = function(callback) {
  this.connection.on('value', function(snapshoot) {
    this.thermostat = snapshoot.val().devices.thermostats[this.deviceId];

    this.device.emit('status', this.thermostat);
  }.bind(this));

  callback();
};

Thermostat.prototype.halt = function(callback) {
  callback();
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

Thermostat.prototype.read = function(key, callback) {
  var self = this;

  this.connection.once('read', function(data) {
    self.device.emit('read', data);

    if (typeof(callback) === 'function') {
      callback(data);
    }
  });

  this.connection.read(this.deviceKey + '/' + key);
};

Thermostat.prototype.write = function(key, value, callback) {
  this.connection.write(this.deviceKey + '/' + key, value, callback);
};

