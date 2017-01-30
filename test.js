import test from 'ava';
import fn from './';

test('stdout', async t => {
	const {stdout} = await fn('./fixture.js', ['foo', 'bar']);

	t.is(stdout, 'foo\nbar\n');
});

test('stderr', async t => {
	const {stderr} = await fn('./fixture.js', ['foo', '--error']);

	t.is(stderr, 'foo\n');
});

test('cat', async t => {
	const result = fn('./fixture.js', ['--cat']);
	result.stdin.end('foo\n');
	const {stdout} = await result;
	t.is(stdout, 'foo\n');
});

test('exit', async t => {
	t.throws(fn('./fixture.js', ['--exit']), Error);
});

test('exit with error', async t => {
	try {
		await fn('./fixture.js', ['foo', '--error', '--exit']);
	} catch (err) {
		t.is(err.stdout, '');
		t.is(err.stderr, 'foo\n');
	}
});
