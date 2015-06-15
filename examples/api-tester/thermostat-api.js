"use strict";

var Cylon = require("cylon");

Cylon.robot({
  connections: {
    nest: { adaptor: "nest", accessToken: "ACCESS_TOKEN" }
  },

  devices: {
    thermostat: { driver: "nest-thermostat", deviceId: "DEVICE_ID" }
  },

  work: function(my) {
    my.thermostat.on("status", function() {
      console.log("========================Thermostat=======================");
      console.log("id:",
        my.thermostat.deviceId);
      console.log("locale:",
        my.thermostat.locale());
      console.log("software version:",
        my.thermostat.softwareVersion());
      console.log("structure id:",
        my.thermostat.structureId());
      console.log("name:",
        my.thermostat.deviceName());
      console.log("name long:",
        my.thermostat.nameLong());
      console.log("last connection:",
        my.thermostat.lastConnection());
      console.log("is online?:",
        my.thermostat.isOnline());
      console.log("can cool?:",
        my.thermostat.canCool());
      console.log("can heat?:",
        my.thermostat.canHeat());
      console.log("is using emergency heat ?:",
        my.thermostat.isUsingEmergencyHeat());
      console.log("has fan ?:",
        my.thermostat.hasFan());
      console.log("fan timer active ?:",
        my.thermostat.fanTimerActive());
      console.log("fan timer timeout:",
        my.thermostat.fanTimerTimeout());
      console.log("has leaf ?:",
        my.thermostat.hasLeaf());
      console.log("temperature scale:",
        my.thermostat.temperatureScale());
      console.log("target temperature Fahrenheit:",
        my.thermostat.targetTemperatureF());
      console.log("target temperature Celsius:",
        my.thermostat.targetTemperatureC());
      console.log("target temperature high Fahrenheit:",
        my.thermostat.targetTemperatureHighF());
      console.log("target temperature high Celsius:",
        my.thermostat.targetTemperatureHighC());
      console.log("target temperature low Fahrenheit:",
        my.thermostat.targetTemperatureLowF());
      console.log("target temperature low Celsius:",
        my.thermostat.targetTemperatureLowC());
      console.log("away temperature high Fahrenheit:",
        my.thermostat.awayTemperatureHighF());
      console.log("away temperature high Celsius:",
        my.thermostat.awayTemperatureHighC());
      console.log("away temperature low Fahrenheit:",
        my.thermostat.awayTemperatureLowF());
      console.log("away temperature low Celsius:",
        my.thermostat.awayTemperatureLowC());
      console.log("hvac mode:",
        my.thermostat.hvacMode());
      console.log("ambient temperature in Fahrenheit:",
        my.thermostat.ambientTemperatureF());
      console.log("ambient temperature in Celsius:",
        my.thermostat.ambientTemperatureC());
      console.log("humidity:",
        my.thermostat.humidity());
      console.log("hvac state:",
        my.thermostat.hvacState());
    });
  }
}).start();
