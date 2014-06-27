/*
 * cylon-nest driver
 * http://cylonjs.com
 *
 * Copyright (c) 2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

'use strict';

var Cylon = require('cylon');

var Nest = module.exports = function Thermostat(opts) {
  Thermostat.__super__.constructor.apply(this, arguments);
  this.structuresRef = {};
};

Cylon.Utils.subclass(Nest, Cylon.Driver);

Thermostat.prototype.commands = [
  'structureName', 'thermostats', 'smokeCoAlarms',
  'away', 'eta'
];

Thermostat.prototype.start = function(callback) {
  var self = this;

  this.connection.on('value', function(snapshoot) {
    self.structures = snapshoot.child('structures').val();

    self.device.emit('status', self.structures);
  });

  Thermostat.__super__.start.apply(this, arguments);
};

Thermostat.prototype.structures = function() {
  return this.structuresRef;
};

Thermostat.prototype.structureName = function(structureId) {
  return this.structuresRef[structureId].name;
};

Thermostat.prototype.thermostats = function(structureId) {
  return this.structuresRef[structureId].thermostats;
};

Thermostat.prototype.smokeCoAlarms = function(structureId) {
  return this.structuresRef[structureId].smoke_co_alarms;
};

Thermostat.prototype.away = function(structureId, val) {
  return this.structuresRef[structureId].away;
};

Thermostat.prototype.eta = function(structureId) {
  return this.structuresRef[structureId].eta;
};

Thermostat.prototype.read = function(key, structureId, callback) {
  var self = this;

  this.connection.once('read', function(data) {
    self.device.emit('read', data);

    if (typeof(callback) === 'function') {
      callback(data);
    }
  });

  this.connection.read('structures/' + structureId + '/' + key);
};

Thermostat.prototype.write = function(key, value, structureId, callback) {
  this.connection.write('structures/' + structureId + '/' + key, value, callback);
};

