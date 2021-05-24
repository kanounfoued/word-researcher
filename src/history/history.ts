const historyStack: string[] = [];
let currentPosition = historyStack.length - 1;

export const pushWord = (word: string): string | null => {
  if (!word) {
    return null;
  }

  historyStack.push(word);
  currentPosition = historyStack.length - 1;

  return word;
};

export const getPreviousWord = (): string | null => {
  if (currentPosition === 0) {
    return null;
  }

  currentPosition -= 1;
  return historyStack[currentPosition];
};

export const getNextWord = (): string | null => {
  if (currentPosition >= historyStack.length - 1) {
    return null;
  }

  currentPosition += 1;
  return historyStack[currentPosition];
};

export const clearHistory = () => {
  historyStack.length = 0;
};

export const jumpToIndex = (index: number): string | null => {
  if (index < 0 || index > historyStack.length - 1) {
    return null;
  }

  return historyStack[index];
};
