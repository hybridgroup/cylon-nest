var cylon = require('cylon');

cylon.robot({
  connection: {
    name: 'nest',
    adaptor: 'nest',
    accessToken: 'ACCESS_TOKEN'
  },

  device: {
    name: 'home',
    driver: 'nest-home',
    structureId: 'STRUCTURE_ID'
  }
})

.on('ready', function(robot) {

    robot.home.on('status', function(data) {
      console.log('The Nest Home at a glance:', data);
    });

    every((10).seconds(), function(){
      console.log('Nest home structures:', robot.home.structures());
      console.log('Nest home structure name:', robot.home.structureName());
      console.log('Nest home thermostats:', robot.home.thermostats());
      console.log('Nest home smokeCoAlarms:', robot.home.smokeCoAlarms());
      console.log('Nest home away status:', robot.home.away());
      console.log('Nest home eta:', robot.home.eta());

      robot.home.read('country_code', robot.home.structureId, function(data) {
        console.log("Nest home country id: ", data);
      });

      robot.home.away('away');

      /*
      robot.home.write('away', 'home', sId, function(err) {
        if (err) {
          console.log('Away status was NOT updated!')
        } else {
          console.log('Away status updated!')
        }
      });
     */
    });
})

.start();
