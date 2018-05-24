import { Haiku } from './../src/haiku.js';

describe('haiku', function() {
  it('should test whether function return right amount of syllabols in the word', function() {
    expect(Haiku.countSyllables("counter")).toEqual(2);
  });

  it('should test whether function return 1 as an amount of syllabols in the word you', function() {
    expect(Haiku.countSyllables("you")).toEqual(1);
  });

  it('should test whether function return 1 as an amount of syllabols in the word I', function() {
    expect(Haiku.countSyllables("I")).toEqual(1);
  });

  it('should test whether function return 1 as an amount of syllabols in the word dirt', function() {
    expect(Haiku.countSyllables("dirt")).toEqual(1);
  });
});
