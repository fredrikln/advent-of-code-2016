const lookup = [
    ['', '', '1', '', ''],
    ['', '2','3','4', ''],
    ['5','6','7','8','9'],
    ['', 'A','B','C', ''],
    ['', '', 'D', '', ''],
];

let x = 0;
let y = 2;

const keypad = {
    reset() {
        x = 0;
        y = 2;
    },

    runSequence(sequence) {
        sequence = sequence.split('');

        sequence.forEach(function (instruction) {
            switch (instruction) {
                case 'U':
                    if (y-1 >= 0 && lookup[y-1][x] != '') {
                        y--;
                    }
                break;

                case 'D':
                    if (y+1 <= 4 && lookup[y+1][x] != '') {
                        y++;
                    }
                break;

                case 'L':
                    if (x-1 >= 0 && lookup[y][x-1] != '') {
                        x--;
                    }
                break;

                case 'R':
                    if (x+1 <= 4 && lookup[y][x+1] != '') {
                        x++;
                    }
                break;
            }
        });

    },

    getCodeForInstructions(instructions) {
        return instructions.reduce((previous, current) => {
            this.runSequence(current);
            return previous += this.getCurrentButton();
        }, '');
    },

    getCurrentButton() {
        return lookup[y][x];
    }
};

module.exports = keypad;
