var Cylon = require('cylon');

Cylon.robot({
  connection: { 
  	name: 'nest', 
  	adaptor: 'nest', 
  	accessToken: 'XXX', 
  	deviceId: 'ABC123'
  },
  device: {name: 'thermostat', driver: 'nest-thermostat'},

  work: function(my) {
    every((60).seconds(), function(){
      console.log(my.thermostat.ambientTemperatureC());
    });
  }
}).start();
