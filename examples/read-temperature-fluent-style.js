var cylon = require('cylon');

cylon.robot({
  connection: {
    name: 'nest',
    adaptor: 'nest',
    accessToken: 'MY_ACCESS_TOKEN'
  },

  device: {
    name: 'thermostat',
    driver: 'nest-thermostat',
    deviceId: 'DEVICE_ID'
  }
})

.on('ready', function(robot) {

    // Listen to the status event to obtain all thermostat
    // related data in a single object.
    robot.thermostat.on('status', function(data) {
      console.log('The Thermostat at a glance--->', data);
    });

    every((30).seconds(), function(){
      // Use one of the device pre-defined functions to obtain the thermostat data
      console.log('NEST ambient temp C:', robot.thermostat.ambientTemperatureC());
      console.log('NEST ambient temp F:', robot.thermostat.ambientTemperatureF());
      console.log('NEST target temp F:', robot.thermostat.targetTemperatureC());
      console.log('NEST target temp F:', robot.thermostat.targetTemperatureF());

      // Use the read function to obtain any value you have a key for and read privileges
      // you can check all vailable keys by checking the data obj passed to the status
      // event.
      robot.thermostat.read('away_temperature_high_c', function(data) {
        console.log("Away Temp High C on read callback -->", data);
      });
    });
})

.start();
