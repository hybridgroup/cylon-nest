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
  opts = opts || {};

  Adaptor.__super__.constructor.apply(this, arguments);

  this.accessToken = opts.extraParams.accessToken;
};

Cylon.Utils.subclass(Adaptor, Cylon.Adaptor);

Adaptor.prototype.commands = [
  'read',
  'write'
];

Adaptor.prototype.connect = function(callback) {
  this.connector = this.apiRef = new Firebase("wss://developer-api.nest.com");

  this.apiRef.auth(this.accessToken, function(error, result) {
    if(error) {
      Cylon.Logger.error('Nest developer authorization failed', error);
    } else {
      Cylon.Logger.info('Nest developer authorization successful', result);
    }
  });

  this.defineAdaptorEvent('value');

  callback();
};

Adaptor.prototype.disconnect = function(callback) {
  callback();
};

Adaptor.prototype.read = function(key, callback) {
  var readRef = this.apiRef.child(key);

  readRef.once('value',
    function(snap) {
      this.connection.emit('read', snap.val());
      callback(null, snap);
    }.bind(this),
    function(err) {
      this.connection.emit('read', err);
      callback(err, null);
    }.bind(this)
  );
};

Adaptor.prototype.write = function(key, value, callback) {
  this.apiRef.child(key).set(value, callback);
};

