# get-exec-file [![Build Status](https://travis-ci.org/SamVerschueren/get-exec-file.svg?branch=master)](https://travis-ci.org/SamVerschueren/get-exec-file)

> Promisify execFile


## Install

```
$ npm install --save get-exec-file
```


## Usage

```js
const execFile = require('get-exec-file');

execFile('./cli.js', ['foo', 'bar']).then(result => {
	//=> {stdout: 'foo', stderr: 'bar'}
});
```


## API

### execFile(file[, args][, options])

#### file

*Required*<br>
Type: `string`

The filename of the program to run.

#### args

Type: `string[]`

Array List of string arguments.

#### options

Type: `object`

Options object of [execFile](https://nodejs.org/api/child_process.html#child_process_child_process_execfile_file_args_options_callback).


## License

MIT © [Sam Verschueren](http://github.com/SamVerschueren)
