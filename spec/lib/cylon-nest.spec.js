/* jshint expr:true */
"use strict";

var nest = source("cylon-nest");

var Adaptor = source("adaptor"),
    Thermostat = source("thermostat"),
    Home = source("nest-home");

describe("Cylon.Nest", function() {
  describe("#adaptors", function() {
    it("is an array of supplied adaptors", function() {
      expect(nest.adaptors).to.be.eql(["nest"]);
    });
  });

  describe("#drivers", function() {
    it("is an array of supplied drivers", function() {
      expect(nest.drivers).to.be.eql(["nest-thermostat", "nest-home"]);
    });
  });

  describe("thermostat driver", function() {
    it("returns an instance of the Thermostat", function() {
      var args = { driver: "nest-thermostat" };
      expect(nest.driver(args)).to.be.instanceOf(Thermostat);
    });
  });

  describe("nest-home driver", function() {
    it("returns an instance of nest driver", function() {
      var args = { driver: "nest-home" };
      expect(nest.driver(args)).to.be.instanceOf(Home);
    });
  });

  describe("#adaptor", function() {
    it("returns an instance of the Adaptor", function() {
      expect(nest.adaptor({})).to.be.instanceOf(Adaptor);
    });
  });
});
