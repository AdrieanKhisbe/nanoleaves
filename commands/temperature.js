'use strict';

const
	API    = require('../index'),
	chalk  = require('chalk');

function builder(yargs) {}

function handler(argv)
{
	const aurora = new API();

	if (argv.number)
	{
		return aurora.setTemperature(argv.number).then(() =>
		{
			console.log(`Color temperature set to ${chalk.bold(argv.number)}.`);
		});
	}

	aurora.temperature().then(v =>
	{
		console.log(`Color temperature is ${chalk.bold(v)}.`);
	});
}

module.exports = {
	command:  'temp [number]',
	describe: 'get or set the overall color temperature',
	builder,
	handler
};
