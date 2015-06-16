/*
 * cylon-nest driver
 * http://cylonjs.com
 *
 * Copyright (c) 2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var Cylon = require("cylon");
var Commands = require("./commands/protect");
var Utils = require("./utils");

var Protect = module.exports = function Protect(opts) {
  Protect.__super__.constructor.apply(this, arguments);

  this.deviceId = opts.deviceId;
  this.deviceKey = "devices/smoke_co_alarms/" + this.deviceId;
  this.type = "Protect";

  this.commands = {
    read: this.read,
    write: this.write
  };
};

Cylon.Utils.subclass(Protect, Cylon.Driver);

Protect.prototype.start = function(callback) {
  this.connection.on("value", function(snapshoot) {
    this.protect = snapshoot.val().devices.smoke_co_alarms[this.deviceId];
    Utils.setupCommands(Commands, this.protect, this);
    this.emit("status", this.protect);
  }.bind(this));

  callback();
};

Protect.prototype.halt = function(callback) {
  callback();
};

Protect.prototype.read = function(key, callback) {
  var drCallback = function(err, data) {
    if (err) {
      this.emit("error", err);
    } else {
      this.emit("read", data);
    }

    if (typeof callback === "function") {
      callback(err, data);
    }
  }.bind(this);

  this.connection.read(this.deviceKey + "/" + key, drCallback);
};

Protect.prototype.write = function(key, value, callback) {
  this.connection.write(this.deviceKey + "/" + key, value, callback);
};

