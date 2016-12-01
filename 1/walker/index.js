// 0 = north, 1 = east, 2 = south, 3 = west
var direction = 0;

var x = 0;
var y = 0;

var visitedPlaces = {

}

function turn (leftOrRight) {
    switch (leftOrRight) {
        case 'L':
            if (direction == 0) {
                direction = 3;
            }
            else {
                direction--;
            }
        break;

        case 'R':
            if (direction == 3) {
                direction = 0;
            }
            else {
                direction++;
            }
        break;
    }
}

function walkInDirection (steps) {
    switch (direction) {
        case 0:
            y += steps;
        break;

        case 1:
            x += steps;
        break;

        case 2:
            y -= steps;
        break;

        case 3:
            x -= steps;
        break;
    }
}

var walker = {

    walk: function (instructions) {
        direction = 0;
        x = 0;
        y = 0;

        instructions = instructions.split(', ');

        for (var i = 0; i < instructions.length; i++) {
            var instruction = instructions[i];
            var steps = instruction.replace('R', '').replace('L', '');
            var turnTo = instruction.replace(steps, '');

            turn(turnTo);
            walkInDirection(parseInt(steps, 10));
        }

        return Math.abs(x) + Math.abs(y);
    },

    getFirstVisitTwice: function (instructions) {
        direction = 0;
        x = 0;
        y = 0;

        instructions = instructions.split(', ');

        for (var i = 0; i < instructions.length; i++) {
            var instruction = instructions[i];
            var steps = instruction.replace('R', '').replace('L', '');
            var turnTo = instruction.replace(steps, '');

            turn(turnTo);

            for (var j = 0; j < steps; j++) {
                walkInDirection(1);

                if (!visitedPlaces[x]) {
                    visitedPlaces[x] = {};
                }

                if (visitedPlaces[x][y] == true) {
                    return Math.abs(x) + Math.abs(y);
                }
                else {
                    visitedPlaces[x][y] = true;
                }
            }
        }

        return false;
    }
}

module.exports = walker;
