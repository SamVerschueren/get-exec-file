'use strict';
var execFile = require('child_process').execFile;

module.exports = function (file, args, options) {
	if (!file) {
		return Promise.reject(new Error('Expected a file'));
	}

	var child;
	var promise = new Promise(function (resolve, reject) {
		child = execFile(file, args, options, function (err, stdout, stderr) {
			if (err) {
				err.stdout = stdout;
				err.stderr = stderr;
				reject(err);
				return;
			}

			resolve({stdout: stdout, stderr: stderr});
		});
	});
	child.then = promise.then.bind(promise);
	child.catch = promise.catch.bind(promise);
	return child;
};
