const historyStack: string[] = [];
let currentPosition = 0;

/**
 * @param word the word tend to be searched.
 * @returns the searched word @if the word has a truthy value.
 */
export const pushWord = (word: string): string | null => {
  if (!word) {
    return null;
  }

  const index = historyStack.findIndex((item) => item === word);

  if (index >= 0) {
    historyStack.splice(index, 1);
  }

  historyStack.push(word);
  currentPosition = historyStack.length - 1;

  return word;
};

/**
 * @returns the previous searched word in the history.
 * until it reaches the index 0
 */
export const getPreviousWord = (): string | null => {
  if (currentPosition === 0) {
    return null;
  }

  currentPosition -= 1;
  return historyStack[currentPosition];
};

/**
 * @returns the next searched word in the historyStack.
 * @if the index is in between 0 and historyStack length.
 */
export const getNextWord = (): string | null => {
  if (currentPosition >= historyStack.length - 1) {
    return null;
  }

  currentPosition += 1;
  return historyStack[currentPosition];
};

/**
 * empty the history.
 */
export const clearHistory = () => {
  historyStack.length = 0;
};

/**
 * @param index is the position of the word will be returned.
 * @returns the word at the position @param index.
 */
export const jumpToIndex = (index: number): string | null => {
  if (index < 0 || index > historyStack.length - 1) {
    return null;
  }

  return historyStack[index];
};
