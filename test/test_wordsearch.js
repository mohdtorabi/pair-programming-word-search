const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js');

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['S', 'W', 'C', 'S', 'Q', 'U', 'A', 'L'],
      ['E', 'T', 'N', 'E', 'E', 'D', 'P', 'H'],
      ['I', 'F', 'C', 'I', 'Q', 'U', 'A', 'L'],
      ['N', 'M', 'J', 'N', 'E', 'V', 'R', 'G'],
      ['F', 'H', 'C', 'F', 'Y', 'E', 'R', 'L'],
      ['I', 'F', 'R', 'I', 'N', 'E', 'Y', 'B'],
      ['E', 'B', 'T', 'E', 'A', 'P', 'A', 'I'],
      ['L', 'D', 'C', 'L', 'K', 'U', 'A', 'S'],
      ['D', 'Z', 'K', 'D', 'Q', 'U', 'A', 'L'],
    ], 'SEINFIELD');

    assert.isTrue(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['S', 'W', 'C', 'S', 'Q', 'U', 'A', 'L'],
      ['E', 'T', 'N', 'E', 'E', 'D', 'P', 'H'],
      ['I', 'F', 'C', 'I', 'Q', 'U', 'A', 'L'],
      ['N', 'M', 'J', 'N', 'E', 'V', 'R', 'G'],
      ['F', 'H', 'C', 'F', 'Y', 'E', 'R', 'L'],
      ['I', 'F', 'R', 'I', 'N', 'E', 'Y', 'B'],
      ['E', 'B', 'T', 'E', 'A', 'P', 'A', 'I'],
      ['L', 'D', 'C', 'L', 'K', 'U', 'A', 'S'],
      ['D', 'Z', 'K', 'D', 'Q', 'U', 'A', 'L'],
    ], 'UDUVEEP');

    assert.isTrue(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['S', 'W', 'C', 'S', 'Q', 'U', 'A', 'L'],
      ['E', 'T', 'N', 'E', 'E', 'D', 'P', 'H'],
      ['I', 'F', 'C', 'I', 'Q', 'U', 'A', 'L'],
      ['N', 'M', 'J', 'N', 'E', 'V', 'R', 'G'],
      ['F', 'H', 'C', 'F', 'Y', 'E', 'R', 'L'],
      ['I', 'F', 'R', 'I', 'N', 'E', 'Y', 'B'],
      ['E', 'B', 'T', 'E', 'A', 'P', 'A', 'I'],
      ['L', 'D', 'C', 'L', 'K', 'U', 'A', 'S'],
      ['D', 'Z', 'K', 'D', 'Q', 'U', 'A', 'L'],
    ], 'APARRYAAD');

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['S', 'W', 'C', 'S', 'Q', 'U', 'A', 'L'],
      ['E', 'T', 'N', 'E', 'E', 'D', 'P', 'H'],
      ['I', 'F', 'C', 'I', 'Q', 'U', 'A', 'L'],
      ['N', 'M', 'J', 'N', 'E', 'V', 'R', 'G'],
      ['F', 'H', 'C', 'F', 'Y', 'E', 'R', 'L'],
      ['I', 'F', 'R', 'I', 'N', 'E', 'Y', 'B'],
      ['E', 'B', 'T', 'E', 'A', 'P', 'A', 'I'],
      ['L', 'D', 'C', 'L', 'K', 'U', 'A', 'S'],
      ['D', 'Z', 'K', 'D', 'Q', 'U', 'A', 'L'],
    ], 'SEINFIELDS');

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['S', 'W', 'C', 'S', 'Q', 'U', 'A', 'L'],
      ['E', 'T', 'N', 'E', 'E', 'D', 'P', 'H'],
      ['I', 'F', 'C', 'I', 'Q', 'U', 'A', 'L'],
      ['N', 'M', 'J', 'N', 'E', 'V', 'R', 'G'],
      ['F', 'H', 'C', 'F', 'Y', 'E', 'R', 'L'],
      ['I', 'F', 'R', 'I', 'N', 'E', 'Y', 'B'],
      ['E', 'B', 'T', 'E', 'A', 'P', 'A', 'I'],
      ['L', 'D', 'C', 'L', 'K', 'U', 'A', 'S'],
      ['D', 'Z', 'K', 'D', 'Q', 'U', 'A', 'L'],
    ], 'WTFMHFDDZ');

    assert.isFalse(result);
  });

});
