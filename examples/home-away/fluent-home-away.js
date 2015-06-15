"use strict";

var Cylon = require("cylon");

Cylon
  .robot()
  .connection("nest", { adaptor: "nest", accessToken: "ACCESS_TOKEN" })
  .device("home", { driver: "nest-home", structureId: "STRUCTURE_ID" })
  .on("ready", function(bot) {
    bot.home.on("status", function(data) {
      console.log("The Nest Home at a glance:", data);
    });

    every((10).seconds(), function() {
      console.log("Nest home structures:", bot.home.structures());
      console.log("Nest home structure name:", bot.home.structureName());
      console.log("Nest home thermostats:", bot.home.thermostats());
      console.log("Nest home smokeCoAlarms:", bot.home.smokeCoAlarms());
      console.log("Nest home away status:", bot.home.away());
      console.log("Nest home eta:", bot.home.eta());

      bot.home.read("country_code", bot.home.structureId, function(data) {
        console.log("Nest home country id: ", data);
      });

      bot.home.away("away");
    });
  });

Cylon.start();
