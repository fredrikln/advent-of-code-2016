var test = require('tape');

var walker = require('../walker');

test('Walking R2, L3', function (t) {
    t.plan(1);
    t.equal(walker.walk('R2, L3'), 5);
});

test('Walking R2, R2, R2', function (t) {
    t.plan(1);
    t.equal(walker.walk('R2, R2, R2'), 2);
});

test('Walking R5, L5, R5, R3', function (t) {
    t.plan(1);
    t.equal(walker.walk('R5, L5, R5, R3'), 12);
});

test('Visiting twice R8, R4, R4, R8', function (t) {
    t.plan(1);
    t.equal(walker.getFirstVisitTwice('R8, R4, R4, R8'), 4);
});

test('Visiting twice R8, R4', function (t) {
    t.plan(1);
    t.equal(walker.getFirstVisitTwice('R8 R4'), false);
});
