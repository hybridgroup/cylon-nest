/*
 * cylon-nest driver
 * http://cylonjs.com
 *
 * Copyright (c) 2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

'use strict';

var Cylon = require('cylon');

var Nest = module.exports = function Nest(opts) {
  Nest.__super__.constructor.apply(this, arguments);
  this.structuresRef = {};
};

Cylon.Utils.subclass(Nest, Cylon.Driver);

Nest.prototype.commands = [
  'structures', 'structureName', 'thermostats', 'smokeCoAlarms',
  'away', 'eta', 'read', 'write'
];

Nest.prototype.start = function(callback) {
  var self = this;

  this.connection.on('value', function(snapshot) {
    self.structuresRef = snapshot.val().structures;

    self.device.emit('status', self.structuresRef);
  });

  Nest.__super__.start.apply(this, arguments);
};

Nest.prototype.structures = function() {
  return this.structuresRef;
};

Nest.prototype.structureName = function(structureId) {
  return this.structuresRef[structureId].name;
};

Nest.prototype.thermostats = function(structureId) {
  return this.structuresRef[structureId].thermostats;
};

Nest.prototype.smokeCoAlarms = function(structureId) {
  return this.structuresRef[structureId].smoke_co_alarms;
};

Nest.prototype.away = function(structureId, val) {
  if (val) {
    this.write('away', val, structureId)
  } else {
    return this.structuresRef[structureId].away;
  }
};

Nest.prototype.eta = function(structureId) {
  return this.structuresRef[structureId].eta;
};

Nest.prototype.read = function(key, structureId, callback) {
  var self = this;

  this.connection.once('read', function(data) {
    self.device.emit('read', data);

    if (typeof(callback) === 'function') {
      callback(data);
    }
  });

  this.connection.read('structures/' + structureId + '/' + key);
};

Nest.prototype.write = function(key, value, structureId, callback) {
  this.connection.write('structures/' + structureId + '/' + key, value, callback);
};

