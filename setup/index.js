#! /usr/bin/env node

/*
  If there is more settings to set up at a later date,
  we'll create a default setup in case we need something of the kind.
*/
const utils = require("./utils");

console.log("Creating env automatically if it doesn't exist");

utils.writeEnv();
