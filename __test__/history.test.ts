import { WordHistory } from '../src/index';

const wordHistory = new WordHistory();

describe('testing the historyStack starting with empty array []', () => {
  beforeEach(() => wordHistory.init([]));

  // ************************************************************
  // ********************* initHistory Function *****************
  // ************************************************************

  test('initialize the history with empty history', () => {
    expect(wordHistory.size()).toBe(0);
    expect(wordHistory.getCurrentIndex).toBe(0);
  });

  // ************************************************************
  // ********************* add Method ********************
  // ************************************************************

  test('test add method with empty string word', () => {
    expect(wordHistory.add('')).toBe(null);
    expect(wordHistory.size()).toBe(0);
  });

  test('test add method with value (bill)', () => {
    expect(wordHistory.add('bill')).toBe('bill');
    expect(wordHistory.size()).toBe(1);
  });

  // ************************************************************
  // ********************* getPrevious Method *************
  // ************************************************************

  test('test getPrevious after clearing the history', () => {
    expect(wordHistory.getPrevious()).toBe(null);
  });

  // ************************************************************
  // ********************* getNext Method *****************
  // ************************************************************

  test('test getNext with after clearing the history', () => {
    expect(wordHistory.getNext()).toBe(null);
  });

  // ************************************************************
  // ********************* goToIndex Mehtod *****************
  // ************************************************************

  test('test goToIndex method with value (-1)', () => {
    expect(wordHistory.goToIndex(-1)).toBe(null);
  });

  test('test goToIndex method with value (0)', () => {
    expect(wordHistory.goToIndex(0)).toBe(null);
  });

  test('test goToIndex method with value (1)', () => {
    expect(wordHistory.goToIndex(1)).toBe(null);
  });

  // ************************************************************
  // ********************* clear Mehtod ****************
  // ************************************************************

  test('test clear method', () => {
    expect(wordHistory.clear()).toBe(undefined);
    expect(wordHistory.size()).toBe(0);
  });
});

describe('testing the historyStack starting with initial values ["is", "class", "id"]', () => {
  beforeEach(() => wordHistory.init(['is', 'class', 'id']));

  // ************************************************************
  // ********************* init Mehtod *****************
  // ************************************************************

  test('initialize the history after initialize the history', () => {
    expect(wordHistory.size()).toBe(3);
    expect(wordHistory.getCurrentIndex).toBe(2);
  });

  // ************************************************************
  // ********************* add Mehtod ********************
  // ************************************************************
  test('test add method with empty string word', () => {
    expect(wordHistory.add('')).toBe(null);
  });

  test('test add method with an already existing word (is)', () => {
    expect(wordHistory.add('is')).toBe('is');

    const findIndex = jest.fn(() => 0);
    expect(findIndex()).toBe(0);

    const splice = jest.fn(() => ['class', 'id']);
    expect(splice()).toEqual(['class', 'id']);

    expect(wordHistory.size()).toBe(3);
    expect(wordHistory.getCurrentIndex).toBe(2);
  });

  test('test add method with non existing word (play)', () => {
    expect(wordHistory.add('play')).toBe('play');

    const findIndex = jest.fn(() => -1);
    expect(findIndex()).toBe(-1);

    expect(wordHistory.size()).toBe(4);
    expect(wordHistory.getCurrentIndex).toBe(3);
  });

  // ************************************************************
  // ********************* goToIndex Mehtod *****************
  // ************************************************************

  test('test goToIndex with value (-1)', () => {
    expect(wordHistory.goToIndex(-1)).toBe(null);
  });

  test('test goToIndex with value (0)', () => {
    expect(wordHistory.goToIndex(0)).toBe('is');
  });

  test('test goToIndex with value (2)', () => {
    expect(wordHistory.goToIndex(2)).toBe('id');
  });

  test('test goToIndex with value (3)', () => {
    expect(wordHistory.goToIndex(3)).toBe(null);
  });
});

describe('test getPrevious and getNext tools together', () => {
  beforeAll(() => wordHistory.init(['is', 'class', 'id']));

  // ************************************************************
  // ********************* getPrevious Mehtod *************
  // ************************************************************

  test('test getPrevious first time', () => {
    expect(wordHistory.getPrevious()).toBe('class');
    expect(wordHistory.size()).toBe(3);
    expect(wordHistory.getCurrentIndex).toBe(1);
  });

  test('test getPrevious second time', () => {
    expect(wordHistory.getPrevious()).toBe('is');
    expect(wordHistory.size()).toBe(3);
    expect(wordHistory.getCurrentIndex).toBe(0);
  });

  test('test getPrevious while the getCurrentIndex is at 0', () => {
    expect(wordHistory.getPrevious()).toBe(null);
    expect(wordHistory.size()).toBe(3);
    expect(wordHistory.getCurrentIndex).toBe(0);
  });

  // ************************************************************
  // ********************* getNext Mehtod *****************
  // ************************************************************

  test('test getNext while the getCurrentIndex is at index 0', () => {
    expect(wordHistory.getNext()).toBe('class');
    expect(wordHistory.size()).toBe(3);
    expect(wordHistory.getCurrentIndex).toBe(1);
  });

  test('test getNext while the second time', () => {
    expect(wordHistory.getNext()).toBe('id');
    expect(wordHistory.size()).toBe(3);
    expect(wordHistory.getCurrentIndex).toBe(2);
  });

  test('test getNext while the getCurrentIndex equals to wordHistory.size()', () => {
    expect(wordHistory.getNext()).toBe(null);
    expect(wordHistory.size()).toBe(3);
    expect(wordHistory.getCurrentIndex).toBe(2);
  });
});
