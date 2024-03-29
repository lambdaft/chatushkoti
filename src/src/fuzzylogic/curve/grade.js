'use strict';
const Shape = require('./shape');
/**
 * Class representing a Grade.
 * @example
 * new Grade(0, 10)
 */
class Grade extends Shape {
    /**
     * Fuzzify
     * @param {number} - Point on X axis
     * @return {number} fuzzy output 0..1
     */
    fuzzify(val) {
        let result = 0;
        const x = val;
        if (x <= this.x0) {
            result = 0;
        } else if (x >= this.x1) {
            result = 1;
        } else {
            result = (x / (this.x1 - this.x0)) - (this.x0 / (this.x1 - this.x0));
        }
        return result;
    }
}
module.exports = Grade;