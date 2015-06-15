"use strict";

var Cylon = require("cylon");

Cylon.robot({
  connections: {
    nest: { adaptor: "nest", accessToken: "MY_ACCESS_TOKEN" }
  },

  devices: {
    thermostat: { driver: "nest-thermostat", deviceId: "DEVICE_ID" }
  },

  work: function(my) {
    // Listen to the status event to obtain all thermostat
    // related data in a single object.
    my.thermostat.on("status", function(data) {
      console.log("The Thermostat at a glance--->", data);
    });

    every((30).seconds(), function() {
      console.log("NEST ambient temp C:", my.thermostat.ambientTemperatureC());
      console.log("NEST ambient temp F:", my.thermostat.ambientTemperatureF());
      console.log("NEST target temp F:", my.thermostat.targetTemperatureC());
      console.log("NEST target temp F:", my.thermostat.targetTemperatureF());

      // Use the read function to obtain any value you have a key for and read
      // privileges you can check all vailable keys by checking the data obj
      // passed to the status event.
      my.thermostat.read("away_temperature_high_c", function(data) {
        console.log("Away Temp High C on read callback -->", data);
      });
    });
  }
}).start();
