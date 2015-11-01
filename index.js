'use strict';
var execFile = require('child_process').execFile;

module.exports = function (file, args, options) {
	if (!file) {
		return Promise.reject(new Error('Expected a file'));
	}

	return new Promise(function (resolve, reject) {
		execFile(file, args, options, function (err, stdout, stderr) {
			if (err) {
				err.stdout = stdout;
				err.stderr = stderr;
				reject(err);
				return;
			}

			resolve({stdout: stdout, stderr: stderr});
		});
	});
};
