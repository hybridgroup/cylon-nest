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
    my.home.on("status", function(data) {
      console.log("The Nest Home at a glance:", data);
    });

    every((10).seconds(), function() {
      console.log("Nest home structures:", my.home.structures());
      console.log("Nest home structure name:", my.home.structureName());
      console.log("Nest home thermostats:", my.home.thermostats());
      console.log("Nest home smokeCoAlarms:", my.home.smokeCoAlarms());
      console.log("Nest home away status:", my.home.away());
      console.log("Nest home eta:", my.home.eta());

      my.home.read("country_code", my.home.structureId, function(data) {
        console.log("Nest home country id: ", data);
      });

      my.home.away("away");
    });
  }
}).start();
