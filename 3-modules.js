// Common JS,every file is module (by default)
//Modules = encapsulated code (only share minimum)
const names = require("./4-names");
const sayHi = require("./5-utils");
const data  = require('./6-alternative-flavour')
require ('./7-mid-grenade')

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
