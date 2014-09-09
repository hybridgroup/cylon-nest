"use strict";

var module = source("cylon-nest");

var Adaptor = source('adaptor'),
    Thermostat = source('thermostat'),
    Nest = source('nest-home');

describe("Cylon.Nest", function() {
  describe("#register", function() {
    it("should be a function", function() {
      expect(module.register).to.be.a('function');
    });
  });

  describe("thermostat driver", function() {
    it("returns an instance of the Thermostat", function() {
      var args = { name: 'nest-thermostat', device: { connection: {} }, extraParams: {} };
      expect(module.driver(args)).to.be.instanceOf(Thermostat);
    });
  });

  describe("nest-home driver", function() {
    it("returns an instance of nest driver", function() {
      var args = { name: 'nest-home', device: { connection: {} }, extraParams: {} };
      expect(module.driver(args)).to.be.instanceOf(Nest);
    });
  });

  describe("#adaptor", function() {
    it("returns an instance of the Adaptor", function() {
      expect(module.adaptor({ extraParams: {} })).to.be.instanceOf(Adaptor);
    });
  });
});
