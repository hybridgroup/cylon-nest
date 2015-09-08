/*
 * cylon-nest adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var Cylon = require("cylon"),
    Firebase = require("firebase");

var Adaptor = module.exports = function Adaptor(opts) {
  Adaptor.__super__.constructor.apply(this, arguments);

  opts = opts || {};

  this.accessToken = opts.accessToken;

  if (this.accessToken == null) {
    var e = "No accessToken specified for Nest adaptor. Cannot proceed";
    throw new Error(e);
  }
};

Cylon.Utils.subclass(Adaptor, Cylon.Adaptor);

Adaptor.prototype.commands = [
  "read",
  "write"
];

Adaptor.prototype.connect = function(callback) {
  this.connector = this.apiRef = this.firebase();

  this.apiRef.authWithCustomToken(this.accessToken, function(error, result) {
    if (error) {
      var err = {
        message: "Nest developer authorization failed",
        details: error
      };

      callback(err);
    } else {
      Cylon.Logger.log("Nest developer authorization successful", result);
      this.defineAdaptorEvent("value");
      callback();
    }
  }.bind(this));
};

Adaptor.prototype.disconnect = function(callback) {
  callback();
};

/**
 * Reads a value for a key from the Nest API
 *
 * @param {String} key key to get corresponding value for
 * @param {Function} callback to be triggered when data is found
 * @return {void}
 * @publish
 */
Adaptor.prototype.read = function(key, callback) {
  var readRef = this.apiRef.child(key);

  readRef.once("value",
    function(snap) {
      this.emit("read", snap.val());
      callback(null, snap);
    }.bind(this),
    function(err) {
      this.emit("error", err);
      callback(err, null);
    }.bind(this)
  );
};

/**
 * Sets a key-value pair in the Nest API
 *
 * @param {String} key key to get corresponding value for
 * @param {String|Object} value value to store in the API
 * @param {Function} callback to be triggered when data is written
 * @return {void}
 * @publish
 */
Adaptor.prototype.write = function(key, value, callback) {
  this.apiRef.child(key).set(value, callback);
};

Adaptor.prototype.firebase = function() {
  return new Firebase("wss://developer-api.nest.com");
};
