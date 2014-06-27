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
  this.connector = this.apiRef = new Firebase("wss://developer-api.nest.com");

  this.apiRef.auth(this.accessToken, function(error, result) {
    if(error) {
      Cylon.Logger.error('Nest developer authorization failed', error);
    } else {
      Cylon.Logger.info('Nest developer authorization successful', result);
    }
  });

  this.defineAdaptorEvent('value');

  Adaptor.__super__.connect.apply(this, arguments);
};

Adaptor.prototype.read = function(key) {
  var readRef = this.apiRef.child(key),
      self = this;

  readRef.once('value', function(snap) {
    self.connection.emit('read', snap.val());
  });
};

Adaptor.prototype.write = function(key, value, callback) {
  this.apiRef.child(key).set(value, callback);
};

