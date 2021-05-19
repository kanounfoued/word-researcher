import Options from './types/Options';

/**
 * @param word @String
 * @returns [] @if the word is empty
 * @else list of the score.
 */

export const eval_KMP_prefix = (word: string): number[] => {
  if (!word) {
    return [];
  }

  // TREATE CASE SENSATIVE OUTSIDE THIS FUNCTION.
  //word = word.toLowerCase();

  const result: number[] = [];
  result[0] = 0;

  let k: number = 0;

  for (let i = 1; i < word.length; i++) {
    while (k > 0 && word[k] !== word[i]) k = result[k - 1];

    if (word[i] === word[k]) k++;

    result[i] = k;
  }

  return result;
};

/**
 * @param text @String text to search in.
 * @param word @String the word to look for its occurence.
 * @returns -1 if no occurence
 * @else the first encountered poistion.
 */

// treat the case of case sensative
const findOne = (text: string, word: string, options: Options = {}): number => {
  if (!text || !word) {
    return -1;
  }

  if (!options.caseSensative) {
    text = text.toLowerCase();
    word = word.toLowerCase();
  }

  const result: number[] = eval_KMP_prefix(word);

  let maxLength: number = 0;

  for (let i = 0; i < text.length; i++) {
    while (maxLength > 0 && text[i] !== word[maxLength]) {
      maxLength = result[maxLength - 1];
    }

    if (text[i] === word[maxLength]) {
      maxLength++;
    }

    if (maxLength === word.length) {
      return i + 1 - word.length;
    }
  }

  return -1;
};

/**
 * @param text @String text to search in.
 * @param word @String the word to look for its occurence.
 * @returns [] @if no occurence
 * @else all occurences found in the text.
 */

const findAll = (text: string, word: string, options: Options = {}): number[] => {
  if (!text) {
    return [];
  }

  if (!word) {
    return [];
  }

  if (!options.caseSensative) {
    text = text.toLowerCase();
    word = word.toLowerCase();
  }

  const result: number[] = eval_KMP_prefix(word);
  const allPositions: number[] = [];

  let maxLength: number = 0;

  for (let i = 0; i < text.length; i++) {
    while (maxLength > 0 && text[i] !== word[maxLength]) {
      maxLength = result[maxLength - 1];
    }

    if (text[i] === word[maxLength]) {
      maxLength++;
    }

    if (maxLength === word.length) {
      allPositions.push(i + 1 - word.length);
    }
  }

  if (allPositions.length) {
    return allPositions;
  }

  return [];
};

export { findOne, findAll };
