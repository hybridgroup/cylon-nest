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

.on('ready', function(my) {
  my.thermostat.on('value', function(data) {
    console.log('The Thermostat at a glance --->', data);
  });

  every((30).seconds(), function(){
    // Set temperature of the Nest thermostat using one of the device functions:
    my.thermostat.setTargetTemperatureC(24);

    // Set any attribute in the of the Nest thermostat, that you have write privileges for,
    // using write function:
    my.thermostat.write('target_temperature_high_c', 30, function(err) {
      if (err) {
        console.log('Target Temp was NOT updated!');
      } else {
        console.log('Target Temp updated!');
      }
    });
  });
})

.start();
