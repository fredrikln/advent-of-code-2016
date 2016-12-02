var test = require('tape');

var keypad = require('../keypad');
var keypad2 = require('../keypad2');

test('Moving Up', (t) => {
    t.plan(1);

    keypad.reset();
    keypad.runSequence('U');

    t.equal(keypad.getCurrentButton(), '2');
});

test('Moving Left', (t) => {
    t.plan(1);

    keypad.reset();
    keypad.runSequence('L');

    t.equal(keypad.getCurrentButton(), '4');
});

test('Moving Right', (t) => {
    t.plan(1);

    keypad.reset();
    keypad.runSequence('R');

    t.equal(keypad.getCurrentButton(), '6');
});

test('Moving Down', (t) => {
    t.plan(1);

    keypad.reset();
    keypad.runSequence('D');

    t.equal(keypad.getCurrentButton(), '8');
});

test('First line of demo instructions', (t) => {
    t.plan(1);

    keypad.reset();
    keypad.runSequence('ULL');

    t.equal(keypad.getCurrentButton(), '1');
});

test('Second line of demo instructions', (t) => {
    t.plan(1);

    keypad.reset();
    keypad.runSequence('ULL');
    keypad.runSequence('RRDDD');

    t.equal(keypad.getCurrentButton(), '9');
});

test('Getting code from instruction set', (t) => {
    t.plan(1);

    keypad.reset();

    let code = keypad.getCodeForInstructions([
        'ULL',
        'RRDDD',
        'LURDL',
        'UUUUD',
    ]);

    t.equal(code, '1985');
});

test('Second keypad moving Up from starting position', (t) => {
    t.plan(1);

    keypad2.reset();
    keypad2.runSequence('U');

    t.equal(keypad2.getCurrentButton(), '5');
});

test('Second keypad moving Left from starting position', (t) => {
    t.plan(1);

    keypad2.reset();
    keypad2.runSequence('L');

    t.equal(keypad2.getCurrentButton(), '5');
});

test('Second keypad moving Right from starting position', (t) => {
    t.plan(1);

    keypad2.reset();
    keypad2.runSequence('R');

    t.equal(keypad2.getCurrentButton(), '6');
});

test('Second keypad moving Down from starting position', (t) => {
    t.plan(1);

    keypad2.reset();
    keypad2.runSequence('D');

    t.equal(keypad2.getCurrentButton(), '5');
});

test('First line of demo instructions for keypad 2', (t) => {
    t.plan(1);

    keypad2.reset();
    keypad2.runSequence('ULL');

    t.equal(keypad2.getCurrentButton(), '5');
});

test('Second line of demo instructions keypad 2', (t) => {
    t.plan(1);

    keypad2.reset();
    keypad2.runSequence('ULL');
    keypad2.runSequence('RRDDD');

    t.equal(keypad2.getCurrentButton(), 'D');
});
