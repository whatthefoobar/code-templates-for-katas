"use strict";

class Kata {
  fizzBuzz(num) {
    if (num % 3 == 0) return "Fizz";
    else if (num % 5 == 0) return "Buzz";
    return num.toString();
  }
}

module.exports = Kata;
