"use strict";

var Cylon = require("cylon");

Cylon.robot({
  connections: {
    nest: { adaptor: "nest", accessToken: "ACCESS_TOKEN" }
  },

  devices: {
    home: { driver: "nest-home", structureId: "STRUCTURE_ID" }
  },

  work: function(my) {
    my.home.on("status", function() {
      console.log("========================Structure========================");
      console.log("structure id:", my.home.structureId);
      console.log("structure name:", my.home.structureName());
      console.log("thermostats:", my.home.thermostats());
      console.log("smokeCoAlarms:", my.home.smokeCoAlarms());
      console.log("devices:", my.home.devices());
      console.log("away status:", my.home.away());
      console.log("countryCode:", my.home.countryCode());
      console.log("postalCode:", my.home.postalCode());
      console.log("peakPeriodStartTime:", my.home.peakPeriodStartTime());
      console.log("peakPeriodEndTime:", my.home.peakPeriodEndTime());
      console.log("timeZone:", my.home.timeZone());
      console.log("eta:", my.home.eta());
    });

  }
}).start();
