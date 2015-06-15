"use strict";

var Cylon = require("cylon");

Cylon
  .robot()
  .connection("nest", { adaptor: "nest", accessToken: "ACCESS_TOKEN" })
  .device("thermostat", { driver: "nest-thermostat", deviceId: "DEVICE_ID" })
  .on("ready", function(bot) {
    bot.thermostat.on("value", function(data) {
      console.log("The Thermostat at a glance --->", data);
    });

    every((30).seconds(), function() {
      bot.thermostat.targetTemperatureC(24);

      // Set any attribute in the of the Nest thermostat that you have write
      // privileges for, using write function:
      bot.thermostat.write("target_temperature_high_c", 30, function(err) {
        if (err) {
          console.log("Target Temp was NOT updated!");
        } else {
          console.log("Target Temp updated!");
        }
      });
    });
  });

Cylon.start();
