/* jshint expr:true */
"use strict";

var Thermostat = source("thermostat");

describe("Cylon.Drivers.Nest.Thermostat", function() {
  var driver = new Thermostat({
    connection: {}
  });

  it("needs tests", function() {
    expect(driver).to.be.an.instanceOf(Thermostat);
  });
});
