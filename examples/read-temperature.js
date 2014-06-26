var Cylon = require('cylon');

Cylon.robot({
  connection: {
    name: 'nest',
    adaptor: 'nest',
    accessToken: 'c.1f7QA8se2tx5xOaKJYk2VUj3lkUiNClxhsbQczQiODTHUrHH4Sx0qEyN7K9kVw6NZ6xtMmyvTPpnEHXWPrTK4ZLygam5rJYH6tachF7Qw885DUHnsW9wiGXmaU8Q0yk68isxVExP4gPubB71'
  },

  device: {
    name: 'thermostat',
    driver: 'nest-thermostat',
    deviceId: 'nGJBxgnS-Ow3u7xNXbUw1Of6ECoH41OD'
  },

  work: function(my) {

    my.thermostat.on('value', function(data) {
      console.log('The SnapShoot --->', data);
    });

    every((10).seconds(), function(){
      console.log('NEST ambient temp C:', my.thermostat.ambientTemperatureC());
      console.log('NEST ambient temp F:', my.thermostat.ambientTemperatureF());
      console.log('NEST target temp F:', my.thermostat.targetTemperatureC());
      console.log('NEST target temp F:', my.thermostat.targetTemperatureF());
    });
  }
}).start();
