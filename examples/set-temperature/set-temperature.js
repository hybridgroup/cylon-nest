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

    my.thermostat.on("value", function(data) {
      console.log("The Thermostat at a glance --->", data);
    });

    every((30).seconds(), function() {
      my.thermostat.targetTemperatureC(24);

      // Set any attribute in the of the Nest thermostat that you have write
      // privileges for, using write function:
      my.thermostat.write("target_temperature_high_c", 30, function(err) {
        if (err) {
          console.log("Target Temp was NOT updated!");
        } else {
          console.log("Target Temp updated!");
        }
      });
    });
  }
}).start();
