/**
 * SINGLETON DESIGN PATTERN
 * 
 * A singleton class should be one which:
 * - Ensures that it creates only one instance of the class;
 * - Provides a global access point to the state;
 * - Makes sure that the instance is only created the first time.
 */


/* let apple = new function () {
    this.type = "macintosh"
    this.color = "red"
    this.getInfo = function () {
        return this.color + ' ' + this.type + ' apple'
    }
} */

let APPLE = new function () {
    this.getInfo = function (type, color) {
        return color + ' ' + type + ' apple'
    }
}

const apple = APPLE.getInfo('hello', 'world')

console.log(apple)
