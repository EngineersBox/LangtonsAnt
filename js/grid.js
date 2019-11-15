/**
 * Generate a 2D array of dimensions cols x rows filled with
 * the specified value
 * 
 * @param {Number} cols 
 * @param {Number} rows
 * @returns {Array}
 */
function create2DArray(cols, rows) {
    return retArr = [...Array(cols)].map(x => Array(rows).fill(1));
}

class Grid {

    /**
     * Create a new Grid
     * 
     * @param {Number} cols 
     * @param {Number} rows 
     */
    constructor(cols, rows) {
        this.cols = cols;
        this.rows = rows;
        this.grid = create2DArray(this.cols, this.rows);
    }

    /**
     * Set the state of a specific square
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} state 
     */
    setState(x, y, state) {
        this.grid[y][x] = state;
    }

    /**
     * Get the state of the specific position
     * 
     * @param {Number} x 
     * @param {Number} y 
     */
    getState(x, y) {
        return this.grid[y][x];
    }

}