/*
 * cylon-nest driver
 * http://cylonjs.com
 *
 * Copyright (c) 2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var Cylon = require("cylon");
var Commands = require("./commands/home");
var Utils = require("./utils");

var Nest = module.exports = function Nest(opts) {
  Nest.__super__.constructor.apply(this, arguments);
  this.structuresRef = {};
  this.structureId = opts.structureId || null;
  this.type = "Nest";

  this.commands = {
    read: this.read,
    write: this.write
  };

  this.events = [
    /**
     * Emitted with the home status on startup
     *
     * @event status
     */
    "status"
  ];
};

Cylon.Utils.subclass(Nest, Cylon.Driver);

Nest.prototype.start = function(callback) {
  this.connection.on("value", function(snapshot) {
    this.structuresRef = snapshot.val().structures;
    Utils.setupCommands(Commands, this.structuresRef, this);
    this.emit("status", this.structuresRef);
  }.bind(this));

  callback();
};

Nest.prototype.halt = function(callback) {
  callback();
};

Nest.prototype.read = function(key, structureId, callback) {
  var sId = null;

  if (typeof structureId === "function") {
    callback = structureId;
    sId = this.structureId;
  } else {
    sId = structureId || this.structureId;
  }

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

  this.connection.read("structures/" + sId + "/" + key, drCallback);
};

Nest.prototype.write = function(key, value, structureId, callback) {
  var sId = null;

  if (typeof structureId === "function") {
    callback = structureId;
    sId = this.structureId;
  } else {
    sId = structureId || this.structureId;
  }
  this.connection.write("structures/" + sId + "/" + key, value, callback);
};
