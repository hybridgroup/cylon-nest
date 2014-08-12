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
  this.structureId = opts.extraParams.structureId || null;

  this.commands = {
    read: this.read,
    write: this.write,

    away: this.away,
    eta: this.eta,

    structures: this.structures,
    structure_name: this.structureName,
    get_structure: this.getStructure,

    thermostats: this.thermostats,
    smoke_co_alarms: this.smokeCoAlarms
  }
};

Cylon.Utils.subclass(Nest, Cylon.Driver);

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

Nest.prototype.getStructure = function(structureId) {
  var sId = structureId || this.structureId;

  return this.structuresRef[sId];
};

Nest.prototype.structureName = function(structureId) {
  var sId = structureId || this.structureId;

  return this.structuresRef[sId].name;
};

Nest.prototype.thermostats = function(structureId) {
  var sId = structureId || this.structureId;

  return this.structuresRef[sId].thermostats;
};

Nest.prototype.smokeCoAlarms = function(structureId) {
  var sId = structureId || this.structureId;

  return this.structuresRef[sId].smoke_co_alarms;
};

Nest.prototype.away = function(val, structureId) {
  var sId = structureId || this.structureId;

  if (val && sId) {
    this.write('away', val, sId)
  } else {
    sId = this.structureId || val;
    return this.structuresRef[sId].away;
  }
};

Nest.prototype.eta = function(structureId) {
  var sId = structureId || this.structureId;

  return this.structuresRef[sId].eta;
};

Nest.prototype.read = function(key, structureId, callback) {
  var sId = null,
      self = this;

  if (typeof(structureId) === 'function') {
    callback = structureId;
    sId = this.structureId;
  } else {
    sId = structureId || this.structureId;
  }

  this.connection.once('read', function(data) {
    self.device.emit('read', data);

    if (typeof(callback) === 'function') {
      callback(data);
    }
  });

  this.connection.read('structures/' + sId + '/' + key);
};

Nest.prototype.write = function(key, value, structureId, callback) {
  var sId = null;

  if (typeof(structureId) === 'function') {
    callback = structureId;
    sId = this.structureId;
  } else {
    sId = structureId || this.structureId;
  }

  this.connection.write('structures/' + sId + '/' + key, value, callback);
};
