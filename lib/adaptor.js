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
  var extraParams = opts.extraParams || {};

  Adaptor.__super__.constructor.apply(this, arguments);

  this.token = extraParams.token;
  this.deviceId = extraParams.deviceId;
};

Cylon.Utils.subclass(Adaptor, Cylon.Adaptor);

Adaptor.prototype.commands = [
  'read',
  'write'
];

Adaptor.prototype.connect = function(callback) {
	this.dataRef = new Firebase("wss://developer-api.nest.com");
	this.dataRef.auth(this.token, function(error, result) {
	  if(error) {
	    console.log("Nest authorization failed!", error);
	  }
	});

  Nest.__super__.connect.apply(this, arguments);
};

Adaptor.prototype.read = function(key) {
	this.dataRef.child(this._deviceKey(key));
};

Adaptor.prototype.write = function(key, value) {
	this.dataRef.child(this._deviceKey(key)).set(value);
};

Adaptor.prototype._deviceKey = function(key) {
	return "devices/thermostats/" + this.deviceId + "/" + key
};
