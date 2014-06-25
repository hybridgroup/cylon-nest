"use strict";

var module = source("cylon-nest");

var Adaptor = source('adaptor'),
    Thermostat = source('thermostat');

describe("Cylon.Nest", function() {
  describe("#register", function() {
    it("should be a function", function() {
      expect(module.register).to.be.a('function');
    });
  });

  describe("thermostat driver", function() {
    it("returns an instance of the Thermostat", function() {
      var args = { device: {} };
      expect(module.driver(args)).to.be.instanceOf(Thermostat);
    });
  });

  describe("#adaptor", function() {
    it("returns an instance of the Adaptor", function() {
      expect(module.adaptor()).to.be.instanceOf(Adaptor);
    });
  });
});
