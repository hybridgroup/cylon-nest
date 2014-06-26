/*
 * cylon-nest adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

'use strict';

var Cylon = require('cylon'),
    Firebase = require('firebase');

var Adaptor = module.exports = function Adaptor(opts) {
  if (opts == null) {
    opts = {};
  }

  Adaptor.__super__.constructor.apply(this, arguments);

  this.accessToken = opts.extraParams.accessToken;
};

Cylon.Utils.subclass(Adaptor, Cylon.Adaptor);

Adaptor.prototype.commands = [
  'read',
  'write'
];

Adaptor.prototype.connect = function(callback) {
  Cylon.Logger.info('Disconnecting ', this.name);
};

Adaptor.prototype.connect = function(callback) {
  var self = this;
  this.connector = this.dataRef = new Firebase("wss://developer-api.nest.com");

  this.connector.auth(this.accessToken, function(error, result) {
    console.log('Nest authentication result->', result);
    console.log('Nest authentication error->', error);
    if(error) {
       console.log("Nest authorization failed!", error);
    }
  });

  this.defineAdaptorEvent('value');

  Adaptor.__super__.connect.apply(this, arguments);
};

Adaptor.prototype.read = function(key) {
  return this.dataRef.child(this._deviceKey(key));
};

Adaptor.prototype.write = function(key, value) {
  this.dataRef.child(this._deviceKey(key)).set(value);
};

Adaptor.prototype._deviceKey = function(key) {
  return "devices/" + key
};
