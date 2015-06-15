"use strict";

var Cylon = require("cylon");

Cylon.robot({
  connections: {
    nest: { adaptor: "nest", accessToken: "accessToken" }
  },

  devices: {
    thermostat: { driver: "nest-thermostat", deviceId: "DEVICE_ID" }
  },

  work: function(my) {

    my.thermostat.on("value", function(data) {
      console.log("The Thermostat SnapShoot --->", data);
    });

    every((10).seconds(), function() {
      console.log("NEST ambient temp C:", my.thermostat.ambientTemperatureC());
      console.log("NEST ambient temp F:", my.thermostat.ambientTemperatureF());
      console.log("NEST target temp F:", my.thermostat.targetTemperatureC());
      console.log("NEST target temp F:", my.thermostat.targetTemperatureF());

      my.thermostat.targetTemperatureC(24);

      my.thermostat.write("target_temperature_high_c", 30, function(err) {
        console.log("ERR OBJ =====>", err);
        if (err) {
          console.log("Target Temp was NOT updated!");
        } else {
          console.log("Target Temp updated!");
        }
      });

      my.thermostat.read("away_temperature_high_c", function(data) {
        console.log("Away Temp High C on read Callback -->", data);
      });
    });
  }
}).start();
