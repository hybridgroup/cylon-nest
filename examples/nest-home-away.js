var Cylon = require('cylon');

Cylon.robot({
  connection: {
    name: 'nest',
    adaptor: 'nest',
    accessToken: 'c.1f7QA8se2tx5xOaKJYk2VUj3lkUiNClxhsbQczQiODTHUrHH4Sx0qEyN7K9kVw6NZ6xtMmyvTPpnEHXWPrTK4ZLygam5rJYH6tachF7Qw885DUHnsW9wiGXmaU8Q0yk68isxVExP4gPubB71'
  },

  device: {
    name: 'home',
    driver: 'nest-home'
  },

  work: function(my) {

    my.home.on('status', function(data) {
      console.log('The Nest Home at a glance --->', data);
    });

    var sId = 'l38p6_vVeF9R7yl6GJgLuyHbEuVU_1ui7KAofiXXa5wZ9PBb-0AJaw';

    every((10).seconds(), function(){
      console.log('Nest home structures:', my.home.structures());
      console.log('Nest home structure name:', my.home.structureName(sId));
      console.log('Nest home thermostats:', my.home.thermostats(sId));
      console.log('Nest home smokeCoAlarms:', my.home.smokeCoAlarms(sId));
      console.log('Nest home away status:', my.home.away(sId));
      console.log('Nest home eta:', my.home.eta(sId));

      my.home.read('country_code', sId, function(data) {
        console.log("Nest home country id: ", data);
      });

      my.home.away(sId, 'away');

      /*
      my.home.write('away', 'home', sId, function(err) {
        if (err) {
          console.log('Away status was NOT updated!')
        } else {
          console.log('Away status updated!')
        }
      });
     */
    });
  }
}).start();
