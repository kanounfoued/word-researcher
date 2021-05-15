const eval_KMP_prefix = (word: string): number[] => {
  if (!word) {
    return [];
  }

  if (typeof word !== 'string') {
    word = word + '';
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

const findOne = (text: string, word: string): number => {
  return -1;
};

const findAll = (text: string, word: string): number[] => {
  return [];
};

export { findOne, findAll };
