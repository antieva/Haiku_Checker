export class Haiku {

  static countSyllables(inputWord) {
    const vowels = "aeiouy";
    let counter = 0;
    let i = 0;
    let word = inputWord.toLowerCase();

    while (i < word.length) {
      if ((i + 1) < word.length && (i + 2) < word.length && vowels.includes(word[i]) && vowels.includes(word[i+1]) && vowels.includes(word[i+2])) {
        counter++;
        i += 3;
      } else if ((i + 1) < word.length && vowels.includes(word[i]) && vowels.includes(word[i+1])) {
        counter++;
        i += 2;
      } else if (i == word.length - 1 && word.length - 3 >= 0 && word.length - 2 >= 0 && word[i] === 'e' &&  vowels.includes(word[word.length-3]) && !vowels.includes(word[word.length-2])) {
        break;
      } else if (vowels.includes(word[i])) {
          counter++;
          i++;
        }
        i++;
      }
    return counter;
  }
}
