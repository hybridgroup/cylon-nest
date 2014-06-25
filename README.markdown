# Cylon.js For Nest

Cylon.js (http://cylonjs.com) is a JavaScript framework for robotics and
physical computing using Node.js

This repository contains the Cylon adaptor for Nest.

For more information about Cylon, check out the repo at
https://github.com/hybridgroup/cylon

## Getting Started

Install the module with: `npm install cylon-nest`

## Examples

## Connecting

```javascript
var Cylon = require('cylon');

Cylon.robot({
  connection: { name: 'nest', adaptor: 'nest' },
  device: {name: 'nest', driver: 'nest'},

  work: function(my) {
    // provide an example of your module here
  }
}).start();
```

Explain how to connect from the computer to the device here...

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code
using `make test` and `make lint`.

## Release History

None yet...

## License

Copyright (c) 2014 Your Name Here. See `LICENSE` for more details
