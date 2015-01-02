/*
 * cylon-nest driver
 * http://cylonjs.com
 *
 * Copyright (c) 2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var Cylon = require("cylon");

var Thermostat = module.exports = function Thermostat(opts) {
  Thermostat.__super__.constructor.apply(this, arguments);

  this.deviceId = opts.deviceId;
  this.deviceKey = "devices/thermostats/" + this.deviceId;

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
  };
};

Cylon.Utils.subclass(Thermostat, Cylon.Driver);

Thermostat.prototype.start = function(callback) {
  this.connection.on("value", function(snapshoot) {
    this.thermostat = snapshoot.val().devices.thermostats[this.deviceId];

    this.emit("status", this.thermostat);
  }.bind(this));

  callback();
};

Thermostat.prototype.halt = function(callback) {
  callback();
};

/**
 * Returns the thermostat's name
 *
 * @return {String} name
 * @publish
 */
Thermostat.prototype.deviceName = function() {
  return this.thermostat.name;
};

/**
 * Returns the thermostat's detected ambient temperature, in Fahrenheit 
 *
 * @return {String} temp
 * @publish
 */
Thermostat.prototype.ambientTemperatureF = function() {
  return this.thermostat.ambient_temperature_f;
};

/**
 * Returns the thermostat's detected ambient temperature, in Celsius
 *
 * @return {String} temp
 * @publish
 */
Thermostat.prototype.ambientTemperatureC = function() {
  return this.thermostat.ambient_temperature_c;
};

/**
 * Returns the thermostat's targeted temperature, in Fahrenheit
 *
 * @return {String} temp
 * @publish
 */
Thermostat.prototype.targetTemperatureF = function() {
  return this.thermostat.target_temperature_f;
};

/**
 * Returns the thermostat's targeted temperature, in Celsius
 *
 * @return {String} temp
 * @publish
 */
Thermostat.prototype.targetTemperatureC = function() {
  return this.thermostat.target_temperature_c;
};

/**
 * Sets the thermostat's targeted temperature, in Fahrenheit
 *
 * @param {String} value temperature to set as target
 * @return {null}
 * @publish
 */
Thermostat.prototype.setTargetTemperatureF = function(value) {
  this.connection.write(this.deviceKey + "/target_temperature_f", value);
};

/**
 * Sets the thermostat's targeted temperature, in Celsius
 *
 * @param {String} value temperature to set as target
 * @return {null}
 * @publish
 */
Thermostat.prototype.setTargetTemperatureC = function(value) {
  this.connection.write(this.deviceKey + "/target_temperature_c", value);
};

Thermostat.prototype.read = function(key, callback) {
  var drCallback = function(err, data) {
    if (!!err) {
      this.emit("error", err);
    } else {
      this.emit("read", data);
    }

    if (typeof(callback) === "function") {
      callback(err, data);
    }
  }.bind(this);

  this.connection.read(this.deviceKey + "/" + key, drCallback);
};

Thermostat.prototype.write = function(key, value, callback) {
  this.connection.write(this.deviceKey + "/" + key, value, callback);
};

