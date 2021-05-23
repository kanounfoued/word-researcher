const historyStack: string[] = [];
const historyQueue: string[] = [];

export const push_word = (word: string) => {
  historyStack.push(word);
};

export const popWord = () => {
  const word: string | null = historyStack.pop() || null;

  if (word) {
    historyQueue.push(word);
  }
};

export const getPrevious = () => {
  const word: string | null = historyQueue.pop() || null;

  if (word) {
    historyStack.push(word);
  }
};
