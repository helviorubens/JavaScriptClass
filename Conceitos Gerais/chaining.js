/**
 * METHOD CHAINING IN JAVACRIPT
 * Source: https://x-team.com/blog/javascript-method-chaining/
 */

/*
const DOG = {
    is: null,
    //log: () => console.log(this.is), // Arrow functions use lexical scoping, where this refers to its surrounding scope - in this case window, not the object itself
    log() {
        console.log(this.is)
    },
    bark() {
        this.is = "woofing"
        this.log()
        return this
    },
    walk() {
        this.is = "walking"
        this.log()
        return this
    },
    eat(){
        this.is = "eating"
        this.log()
        return this
    }
}

DOG.bark().eat().walk()
*/

class Arithmetic {
    constructor() {
      this.value = 0;
    }
    sum(...args) {
      this.value = args.reduce((sum, current) => sum + current, 0);
      return this;
    }
    addition(value) {
      this.value = this.value + value;
      return this;
    }
    subtraction(value) {
      this.value = this.value - value;
      return this;
    }
    average(...args) {
      this.value = args.length? (this.sum(...args).value) / args.length: undefined;
      return this;
    }
  }

const operation = new Arithmetic()

const result = operation.sum(1, 3, 6).subtraction(3).value

console.log(result)