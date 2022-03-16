"use strict";

const expect = require("chai").expect;
var { describe, it } = require("mocha");
const Kata = require("../src/index");

describe("Kata class", function () {
  it("should return 1!", function () {
    var kata = new Kata();
    var returnValue = kata.fizzBuzz(1);

    expect(returnValue).to.equal("1");
  });
  it("should return 7!", function () {
    var kata = new Kata();
    var returnValue = kata.fizzBuzz(7);

    expect(returnValue).to.equal("7");
  });
  it("should return 10!", function () {
    var kata = new Kata();
    var returnValue = kata.fizzBuzz(11);

    expect(returnValue).to.equal("11");
  });

  it("should return Fizz if divisible by 3!", function () {
    var kata = new Kata();
    var returnValue = kata.fizzBuzz(12);

    expect(returnValue).to.equal("Fizz");
  });
  it("should return Buzz if divisible by 5!", function () {
    var kata = new Kata();
    var returnValue = kata.fizzBuzz(20);

    expect(returnValue).to.equal("Buzz");
  });
  it("should return FizzBuzz if divisible by 3 and 5!", function () {
    var kata = new Kata();
    var returnValue = kata.fizzBuzz(15);

    expect(returnValue).to.equal("FizzBuzz");
  });
  it("should return FizzBuzz if divisible by 3 and 5!", function () {
    var kata = new Kata();
    var returnValue = kata.fizzBuzz(30);

    expect(returnValue).to.equal("FizzBuzz");
  });
});
