var cylon = require('cylon');

cylon.robot({
  connection: {
    name: 'nest',
    adaptor: 'nest',
    accessToken: 'accessToken'
  },

  device: {
    name: 'thermostat',
    driver: 'nest-thermostat',
    deviceId: 'DEVICE_ID'
  }
})

.on('ready', function(robot) {
  robot.thermostat.on('value', function(data) {
    console.log('The Thermostat SnapShoot --->', data);
  });

  every((10).seconds(), function(){
    console.log('NEST ambient temp C:', robot.thermostat.ambientTemperatureC());
    console.log('NEST ambient temp F:', robot.thermostat.ambientTemperatureF());
    console.log('NEST target temp F:', robot.thermostat.targetTemperatureC());
    console.log('NEST target temp F:', robot.thermostat.targetTemperatureF());

    robot.thermostat.setTargetTemperatureC(24);

    robot.thermostat.write('target_temperature_high_c', 30, function(err) {
      console.log('ERR OBJ =====>', err);
      if (err) {
        console.log('Target Temp was NOT updated!');
      } else {
        console.log('Target Temp updated!');
      }
    });

    robot.thermostat.read('away_temperature_high_c', function(data) {
      console.log("Away Temp High C on read Callback -->", data);
    });
  });
})

.start();
