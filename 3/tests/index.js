const test = require('tape');

const triangle = require('../triangle');


test('Not a valid triangle 5 10 25', function (t) {
    t.plan(1);
    t.equal(triangle.isValidTriangle([5,10,25]), false);
});

test('Valid triangle 5 6 10', function (t) {
    t.plan(1);
    t.equal(triangle.isValidTriangle([5,6,10]), true);
});

test('Formats row 10 6 5', function (t) {
    t.plan(1);
    t.deepEqual(triangle.formatRow('10 6 5'), [5,6,10]);
});

test('Handles multiple spaces in input', function (t) {
    t.plan(1);
    t.deepEqual(triangle.formatRow('  5   6  10'), [5,6,10]);
});
