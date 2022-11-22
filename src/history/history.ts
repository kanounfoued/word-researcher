export default class WordHistory<T> {
  private history: T[];
  private currentIndex: number;

  constructor(history: T[] = []) {
    this.history = [...history];
    this.currentIndex = history.length > 0 ? history.length - 1 : 0;
  }

  init(history: T[] = []) {
    this.history = [...history];
    this.currentIndex = history.length > 0 ? history.length - 1 : 0;
  }

  add<K extends keyof T>(word: T, property?: K): T | null {
    if (!word) return null;
    let index = -1;

    if (typeof word === 'string') {
      index = this.history.findIndex((item) => item === word);
    } else {
      if (!property) return null;

      index = this.history.findIndex((item) => item[property] === word[property]);
    }

    if (index >= 0) this.history.splice(index, 1);

    this.history.push(word);
    this.currentIndex = this.history.length - 1;

    return word;
  }

  getNext(): T | null {
    if (this.currentIndex >= this.history.length - 1) {
      return null;
    }

    this.currentIndex += 1;
    return this.history[this.currentIndex];
  }

  getPrevious(): T | null {
    if (this.currentIndex === 0) {
      return null;
    }

    this.currentIndex -= 1;
    return this.history[this.currentIndex];
  }

  goToIndex(index: number): T | null {
    index = +index.toFixed(0);

    if (index < 0 || index > this.history.length - 1) {
      return null;
    }

    return this.history[index];
  }

  clear(): void {
    this.history.length = 0;
    this.currentIndex = 0;
  }

  size(): number {
    return this.history.length;
  }

  get getCurrentIndex(): number {
    return this.currentIndex;
  }
}
