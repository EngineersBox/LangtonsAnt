class Utils {

    /**
         * Check if a number is in a range
         * 
         * @param {Number} val 
         * @param {Number} min 
         * @param {Number} max 
         * @returns {Boolean}
         */
    static inRange(val, min, max) {
        return val >= min && val <= max;
    }

    /**
     * Check a position is on the board
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @returns {Boolean}
     */
    static isValidMove(x, y) {
        return this.inRange(y, 0, COLS) && this.inRange(x, 0, ROWS);
    }

    /**
     * Get DOM element with specified id
     * 
     * @param {String} id 
     * @returns {*}
     */
    static getElem(id) {
        return document.getElementById(id);
    }

}