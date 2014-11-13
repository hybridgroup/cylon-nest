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
  this.structureId = opts.structureId || null;

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
  };
};

Cylon.Utils.subclass(Nest, Cylon.Driver);

Nest.prototype.start = function(callback) {
  this.adaptor.on('value', function(snapshot) {
    this.structuresRef = snapshot.val().structures;

    this.emit('status', this.structuresRef);
  }.bind(this));

  callback();
};

Nest.prototype.halt = function(callback) {
  callback();
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
    this.write('away', val, sId);
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
  var sId = null;

  if (typeof(structureId) === 'function') {
    callback = structureId;
    sId = this.structureId;
  } else {
    sId = structureId || this.structureId;
  }

  var drCallback = function(err, data) {
    if (!!err) {
      this.emit('error', err);
    } else {
      this.emit('read', data);
    }

    if (typeof(callback) === 'function') {
      callback(err, data);
    }
  }.bind(this);

  this.adaptor.read('structures/' + sId + '/' + key, drCallback);
};

Nest.prototype.write = function(key, value, structureId, callback) {
  var sId = null;

  if (typeof(structureId) === 'function') {
    callback = structureId;
    sId = this.structureId;
  } else {
    sId = structureId || this.structureId;
  }

  this.adaptor.write('structures/' + sId + '/' + key, value, callback);
};
