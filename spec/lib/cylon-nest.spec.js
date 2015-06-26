"use strict";

var nest = lib("../");

var Adaptor = lib("adaptor"),
    Thermostat = lib("thermostat"),
    Home = lib("nest-home");

describe("Cylon.Nest", function() {
  describe("#adaptors", function() {
    it("is an array of supplied adaptors", function() {
      expect(nest.adaptors).to.be.eql(["nest"]);
    });
  });

  describe("#drivers", function() {
    it("is an array of supplied drivers", function() {
      expect(nest.drivers).to.be.eql(
        ["nest-thermostat", "nest-protect", "nest-home"]
      );
    });
  });

  describe("#driver", function() {
    var opts;

    beforeEach(function() {
      opts = { connection: {} };
    });

    it("can initialize a Nest Thermostat driver", function() {
      opts.driver = "nest-thermostat";
      expect((nest.driver(opts))).to.be.an.instanceOf(Thermostat);
    });

    it("can initialize a Nest Home driver", function() {
      opts.driver = "nest-home";
      expect((nest.driver(opts))).to.be.an.instanceOf(Home);
    });
  });

  describe("#adaptor", function() {
    it("returns an instance of the Nest Adaptor", function() {
      var adaptor = nest.adaptor({ accessToken: "accessToken" });
      expect(adaptor).to.be.instanceOf(Adaptor);
    });
  });
});
