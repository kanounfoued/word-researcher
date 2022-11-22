import { evalKMPPrefix } from '../KMP-utils/KMP';
import { Options } from '../types/Options';

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

  const result: number[] = evalKMPPrefix(word);

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
  if (!text || !word) {
    return [];
  }

  if (!options.caseSensative) {
    text = text.toLowerCase();
    word = word.toLowerCase();
  }

  const result: number[] = evalKMPPrefix(word);
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

  return allPositions;
};

/**
 * @param text @String text to search in.
 * @param word @String the word to look for its occurence.
 * @returns skip the first occurences @if @var skipXFirstResults has been provided.
 * @returns skip the last occurences @if @var skipXLastResults has been provided.
 * @returns all occurences @if no of the above options has been provided.
 */
const skipThenFind = (text: string, word: string, options: Options = {}): number[] => {
  const results = findAll(text, word, options);

  const { skipXFirstResults, skipXLastResults } = options;

  if (skipXFirstResults && skipXFirstResults > 0) {
    return results.slice(skipXFirstResults);
  }

  if (skipXLastResults && skipXLastResults < 0) {
    return results.slice(0, skipXLastResults);
  }

  return results;
};

export { findOne, findAll, skipThenFind };
