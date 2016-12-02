const lookup = [
    ['1','2','3'],
    ['4','5','6'],
    ['7','8','9'],
];

var x = 1;
var y = 1;

var keypad = {
    reset() {
        x = 1;
        y = 1;
    },

    runSequence(sequence) {
        sequence = sequence.split('');

        sequence.forEach(function (instruction) {
            switch (instruction) {
                case 'U':
                    if (y > 0) {
                        y--;
                    }
                break;

                case 'D':
                    if (y < 2) {
                        y++;
                    }
                break;

                case 'L':
                    if (x > 0) {
                        x--;
                    }
                break;

                case 'R':
                    if (x < 2) {
                        x++;
                    }
                break;
            }
        });

    },

    getCodeForInstructions(instructions) {
        var self = this;
        return instructions.reduce((previous, current) => {
            self.runSequence(current);
            return previous += self.getCurrentButton();
        }, '');
    },

    getCurrentButton() {
        return lookup[y][x];
    }
};

module.exports = keypad;
