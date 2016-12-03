const triangle = {
    parseRow(row) {
        return row.replace(/\s+/g, ' ').trim().split(' ').map((a) => parseInt(a,10));
    },

    sortRow(row) {
        return row.sort((a,b) => a > b);
    },

    formatRow(row) {
        return this.sortRow(this.parseRow(row));
    },

    isValidTriangle(triangleSpec) {
        return triangleSpec[0]+triangleSpec[1] > triangleSpec[2];
    }
}

module.exports = triangle;
