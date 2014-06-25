/*
 * cylon-nest driver
 * http://cylonjs.com
 *
 * Copyright (c) 2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

'use strict';

var Cylon = require('cylon');

var Thermostat = module.exports = function Thermostat() {
  Thermostat.__super__.constructor.apply(this, arguments);
  this.commands = ['name', 'ambientTemperatureF', 'ambientTemperatureC', 
  								 'targetTemperatureF', 'targetTemperatureC'];
};

Cylon.Utils.subclass(Thermostat, Cylon.Driver);

Thermostat.prototype.start = function(callback) {
  Thermostat.__super__.start.apply(this, arguments);
};

Thermostat.prototype.name = function() {
  this.connection.read("name");
};

Thermostat.prototype.ambientTemperatureF = function() {
  this.connection.read("ambient_temperature_f");
};

Thermostat.prototype.ambientTemperatureC = function() {
  this.connection.read("ambient_temperature_c");
};

Thermostat.prototype.targetTemperatureF = function() {
  this.connection.read("target_temperature_f");
};

Thermostat.prototype.targetTemperatureC = function() {
  this.connection.read("target_temperature_c");
};
