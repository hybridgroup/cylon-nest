"use strict";

var Cylon = require("cylon");

Cylon
  .robot()
  .connection("nest", { adaptor: "nest", accessToken: "ACCESS_TOKEN" })
  .device("thermostat", { driver: "nest-thermostat", deviceId: "DEVICE_ID" })
  .on("ready", function(bot) {

    // Listen to the status event to obtain all thermostat
    // related data in a single object.
    bot.thermostat.on("status", function(data) {
      console.log("The Thermostat at a glance--->", data);
    });

    every((30).seconds(), function() {
      console.log("NEST ambient temp C:", bot.thermostat.ambientTemperatureC());
      console.log("NEST ambient temp F:", bot.thermostat.ambientTemperatureF());
      console.log("NEST target temp F:", bot.thermostat.targetTemperatureC());
      console.log("NEST target temp F:", bot.thermostat.targetTemperatureF());

      // Use the read function to obtain any value you have a key for and read
      // privileges you can check all vailable keys by checking the data obj
      // passed to the status event.
      bot.thermostat.read("away_temperature_high_c", function(data) {
        console.log("Away Temp High C on read callback -->", data);
      });
    });
  });

Cylon.start();
