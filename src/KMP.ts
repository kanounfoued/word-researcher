export const eval_KMP_prefix = (word: string): number[] => {
  if (!word) {
    return [];
  }

  word = word.toLowerCase();

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

const findOne = (text: string, word: string): number | null => {
  if (!text || !word) {
    return null;
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

  return null;
};

const findAll = (text: string, word: string): number[] | String | null => {
  if (!text) {
    return null;
  }

  if (!word) {
    return '0 Match';
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
      result.push(i + 1 - word.length);
    }
  }

  if (result.length) {
    return result;
  }

  return '0 Match';
};

export { findOne, findAll };
