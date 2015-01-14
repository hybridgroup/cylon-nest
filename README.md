# Cylon.js For Nest

Cylon.js (http://cylonjs.com) is a JavaScript framework for robotics and
physical computing using Node.js

This repository contains the Cylon adaptor for the [Nest](https://developer.nest.com) thermostat.

Want to use Ruby on robots? Check out our sister project Artoo (http://artoo.io)

Want to use the Go programming language to power your robots? Check out our
sister project Gobot (http://gobot.io).

For more information about Cylon, check out our repo at
https://github.com/hybridgroup/cylon

[![Build Status](https://secure.travis-ci.org/hybridgroup/cylon-nest.png?branch=master)](http://travis-ci.org/hybridgroup/cylon-nest) [![Code Climate](https://codeclimate.com/github/hybridgroup/cylon-nest/badges/gpa.svg)](https://codeclimate.com/github/hybridgroup/cylon-nest) [![Test Coverage](https://codeclimate.com/github/hybridgroup/cylon-nest/badges/coverage.svg)](https://codeclimate.com/github/hybridgroup/cylon-nest)

## How to Install

    $ npm install cylon-nest

## How to Use

```javascript
var Cylon = require('cylon');

Cylon.robot({
  connections: {
    nest: { adaptor: 'nest', accessToken: 'XXX' }
  },

  devices: {
    thermostat: { driver: 'nest-thermostat', deviceId: 'XXX' }
  },

  work: function(my) {
    // Listen to the status event to obtain all thermostat
    // related data in a single object.
    my.thermostat.on('status', function(data) {
      console.log('The Thermostat at a glance--->', data);
    });

    every((60).seconds(), function(){
      console.log('NEST ambient temp C:', my.thermostat.ambientTemperatureC());
      console.log('NEST ambient temp F:', my.thermostat.ambientTemperatureF());
    });
  }
}).start();
```

We currently have drivers for the following Nest devices:

- Thermostat
- Nest Home

## How to Connect

First, you need to create a developer account with [Nest Labs](https://developer.nest.com/).

Once you've created an account, you need to create a client app.
The Developer Portal UI will guide you through it.
You don't need an OAuth redirect URL, since we're going to be using the generated PIN to get an access token.

Next step is to obtain the access token for your Nest account in order to authenticate, as instructed [here](https://developer.nest.com/documentation/how-to-auth).

Once you have done this, you should be able to use the `access_token` you obtained, with the generate access token url listed in the clients section of the Nest developer portal, to make API calls from Cylon.js

## Documentation
We're busy adding documentation to our web site at http://cylonjs.com/ please check there as we continue to work on Cylon.js

Thank you!

## Contributing

* All patches must be provided under the Apache 2.0 License
* Please use the -s option in git to "sign off" that the commit is your work and you are providing it under the Apache 2.0 License
* Submit a Github Pull Request to the appropriate branch and ideally discuss the changes with us in IRC.
* We will look at the patch, test it out, and give you feedback.
* Avoid doing minor whitespace changes, renamings, etc. along with merged content. These will be done by the maintainers from time to time but they can complicate merges and should be done seperately.
* Take care to maintain the existing coding style.
* Add unit tests for any new or changed functionality & Lint and test your code using [Grunt](http://gruntjs.com/).
* All pull requests should be "fast forward"
  * If there are commits after yours use “git rebase -i <new_head_branch>”
  * If you have local changes you may need to use “git stash”
  * For git help see [progit](http://git-scm.com/book) which is an awesome (and free) book on git

## Release History

Version 0.7.0 - Compatibility with Cylon 0.21.0

Version 0.6.0 - Compatibility with Cylon 0.21.0

Version 0.5.0 - Compatibility with Cylon 0.20.0

Version 0.4.0 - Compatibility with Cylon 0.19.0

Version 0.3.0 - Compatibility with Cylon 0.18.0

Version 0.2.0 - Compatibility with Cylon 0.16.0

Version 0.1.0 - First release. Added thermostat and home support.

## License

Copyright (c) 2014 The Hybrid Group. Licensed under the Apache 2.0 license.
