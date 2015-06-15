"use strict";

var Cylon = require("cylon");

Cylon
  .robot()
  .connection("nest", { adaptor: "nest", accessToken: "ACCESS_TOKEN" })
  .device("thermostat", { driver: "nest-thermostat", deviceId: "DEVICE_ID" })
  .on("ready", function(bot) {
    bot.thermostat.on("value", function(data) {
      console.log("thermostat snapshot --->", data);
    });

    every((10).seconds(), function() {
      console.log("NEST ambient temp C:", bot.thermostat.ambientTemperatureC());
      console.log("NEST ambient temp F:", bot.thermostat.ambientTemperatureF());
      console.log("NEST target temp F:", bot.thermostat.targetTemperatureC());
      console.log("NEST target temp F:", bot.thermostat.targetTemperatureF());

      bot.thermostat.targetTemperatureC(24);

      bot.thermostat.write("target_temperature_high_c", 30, function(err) {
        console.log("ERR OBJ =====>", err);
        if (err) {
          console.log("Target Temp was NOT updated!");
        } else {
          console.log("Target Temp updated!");
        }
      });

      bot.thermostat.read("away_temperature_high_c", function(data) {
        console.log("Away Temp High C on read Callback -->", data);
      });
    });
  });

Cylon.start();
