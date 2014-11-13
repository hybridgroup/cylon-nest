"use strict";

var module = source("cylon-nest");

var Adaptor = source('adaptor'),
    Thermostat = source('thermostat'),
    Nest = source('nest-home');

describe("Cylon.Nest", function() {
  describe("#adaptors", function() {
    it('is an array of supplied adaptors', function() {
      expect(module.adaptors).to.be.eql(['nest']);
    });
  });

  describe("#drivers", function() {
    it('is an array of supplied drivers', function() {
      expect(module.drivers).to.be.eql(['nest-thermostat', 'nest-home']);
    });
  });

  describe("thermostat driver", function() {
    it("returns an instance of the Thermostat", function() {
      var args = { driver: 'nest-thermostat' };
      expect(module.driver(args)).to.be.instanceOf(Thermostat);
    });
  });

  describe("nest-home driver", function() {
    it("returns an instance of nest driver", function() {
      var args = { driver: 'nest-home' };
      expect(module.driver(args)).to.be.instanceOf(Nest);
    });
  });

  describe("#adaptor", function() {
    it("returns an instance of the Adaptor", function() {
      expect(module.adaptor({})).to.be.instanceOf(Adaptor);
    });
  });
});
