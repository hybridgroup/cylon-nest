"use strict";

var Cylon = require("cylon");

Cylon.robot({
  connections: {
    nest: { adaptor: "nest", accessToken: "ACCESS_TOKEN" }
  },

  devices: {
    protect: { driver: "nest-protect", deviceId: "DEVICE_ID" }
  },

  work: function(my) {
    my.protect.on("status", function() {
      console.log("=========================Protect=========================");
      console.log("id:", my.protect.deviceId);
      console.log("locale:", my.protect.locale());
      console.log("software version:", my.protect.softwareVersion());
      console.log("structure id:", my.protect.structureId());
      console.log("name:", my.protect.deviceName());
      console.log("name long:", my.protect.nameLong());
      console.log("last connection:", my.protect.lastConnection());
      console.log("is online?:", my.protect.isOnline());
      console.log("battery health:", my.protect.batteryHealth());
      console.log("co alarm state:", my.protect.coAlarmState());
      console.log("smoke alarm state:", my.protect.smokeAlarmState());
      console.log("is manual test active:", my.protect.isManualTestActive());
      console.log("last manual test time:", my.protect.lastManualTestTime());
      console.log("ui color state:", my.protect.uiColorState());
    });
  }
}).start();
