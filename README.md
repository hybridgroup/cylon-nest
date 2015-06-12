# Cylon.js For Nest

Cylon.js (http://cylonjs.com) is a JavaScript framework for robotics, physical computing, and the Internet of Things (IoT).

This repository contains the Cylon adaptor for the [Nest](https://developer.nest.com) Home.

Want to use Ruby on robots? Check out our sister project Artoo (http://artoo.io)

Want to use the Go programming language to power your robots? Check out our
sister project Gobot (http://gobot.io).

[![Build Status](https://secure.travis-ci.org/hybridgroup/cylon-nest.png?branch=master)](http://travis-ci.org/hybridgroup/cylon-nest) [![Code Climate](https://codeclimate.com/github/hybridgroup/cylon-nest/badges/gpa.svg)](https://codeclimate.com/github/hybridgroup/cylon-nest) [![Test Coverage](https://codeclimate.com/github/hybridgroup/cylon-nest/badges/coverage.svg)](https://codeclimate.com/github/hybridgroup/cylon-nest)

## How to Install

    $ npm install cylon cylon-nest

## How to Use

```javascript
var Cylon = require('cylon');

Cylon.robot({
  connections: {
    nest: { adaptor: 'nest', accessToken: 'XXX' }
  },

  devices: {
    thermostat: { driver: 'nest-thermostat', deviceId: 'XXX' },
    protect: { driver: 'nest-protect', deviceId: 'XXX' }
  },

  work: function(my) {
    // Listen to the status event to obtain all thermostat
    // related data in a single object.
    my.thermostat.on('status', function(data) {
      console.log('The Thermostat at a glance--->', data);
    });

    my.protect.on('status', function(data) {
      console.log('The Protect at a glance--->', data);
    });

    every((60).seconds(), function(){
      console.log('NEST thermostat ambient temp C:', my.thermostat.ambientTemperatureC());
      console.log('NEST thermostat ambient temp F:', my.thermostat.ambientTemperatureF());

      console.log('NEST protect co alarm state:', my.protect.coAlarmState());
      console.log('NEST protect smoke alarm state:', my.protect.smokeAlarmState());
    });
  }
}).start();
```

We currently have drivers for the following Nest devices:

- Thermostat
- Protect
- Nest Home

## How to Connect

First, you need to create a developer account with [Nest Labs](https://developer.nest.com/).

Once you've created an account, you need to create a client app.
The Developer Portal UI will guide you through it.
You don't need an OAuth redirect URL, since we're going to be using the generated PIN to get an access token.

Next step is to obtain the access token for your Nest account in order to authenticate, as instructed [here](https://developer.nest.com/documentation/how-to-auth).

Once you have done this, you should be able to use the `access_token` you obtained, with the generate access token url listed in the clients section of the Nest developer portal, to make API calls from Cylon.js

## Nest Home Simulator

You can use [Nest Home Simulator](https://developer.nest.com/documentation/cloud/home-simulator) to test your programs. Follow instructions for installation [here](https://developer.nest.com/documentation/cloud/home-simulator).

Once you have the simulator installed, you can create the structures you need and add as many devices as each structure supports.

You can now use your cylon program to interact with your simulated devices.

## Documentation
We're busy adding documentation to our web site at http://cylonjs.com/ please check there as we continue to work on Cylon.js

Thank you!

## Contributing

For our contribution guidelines, please go to [https://github.com/hybridgroup/cylon/blob/master/CONTRIBUTING.md
](https://github.com/hybridgroup/cylon/blob/master/CONTRIBUTING.md
).

## Release History

For the release history, please go to [https://github.com/hybridgroup/cylon-nest/blob/master/RELEASES.md
](https://github.com/hybridgroup/cylon-nest/blob/master/RELEASES.md
).

## License

Copyright (c) 2014-2015 The Hybrid Group. Licensed under the Apache 2.0 license.
