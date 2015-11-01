#!/usr/bin/env node

var meow = require('meow');

var cli = meow();

var log = cli.flags.error ? console.error : console.log;

cli.input.forEach(function (input) {
	log(input);
});

if (cli.flags.exit) {
	process.exit(1);
}
