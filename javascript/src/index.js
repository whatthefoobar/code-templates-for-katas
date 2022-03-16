"use strict";

class Kata {
  fizzBuzz(num) {
    if (num % 3 == 0) return "Fizz";
    return num.toString();
  }
}

module.exports = Kata;
