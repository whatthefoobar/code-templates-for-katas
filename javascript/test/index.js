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
});
