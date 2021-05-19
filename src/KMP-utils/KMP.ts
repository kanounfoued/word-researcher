/**
 * @param word @String
 * @returns [] @if the word is empty
 * @else list of the score.
 */

export const evalKMPPrefix = (word: string): number[] => {
  if (!word) {
    return [];
  }

  // TREATE CASE SENSATIVE OUTSIDE THIS FUNCTION.
  // word = word.toLowerCase();

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
