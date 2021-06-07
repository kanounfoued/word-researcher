import {
  pushWord,
  clearHistory,
  jumpToIndex,
  getPreviousWord,
  getNextWord,
  historyLength,
  initHistory,
  getCurrentPosition,
} from '../src/history/history';

describe('testing the historyStack starting with empty array []', () => {
  beforeEach(() => initHistory([]));

  // ************************************************************
  // ********************* initHistory Function *****************
  // ************************************************************

  test('initialize the history with empty history', () => {
    expect(historyLength()).toBe(0);
    expect(getCurrentPosition()).toBe(0);
  });

  // ************************************************************
  // ********************* pushWord Function ********************
  // ************************************************************

  test('test pushWord with empty string word', () => {
    expect(pushWord('')).toBe(null);
    expect(historyLength()).toBe(0);
  });

  test('test pushWord with value (bill)', () => {
    expect(pushWord('bill')).toBe('bill');
    expect(historyLength()).toBe(1);
  });

  // ************************************************************
  // ********************* getPreviousWord Function *************
  // ************************************************************

  test('test getPreviousWord after clearing the history', () => {
    expect(getPreviousWord()).toBe(null);
  });

  // ************************************************************
  // ********************* getNextWord Function *****************
  // ************************************************************

  test('test getNextWord with after clearing the history', () => {
    expect(getNextWord()).toBe(null);
  });

  // ************************************************************
  // ********************* jumpToIndex Function *****************
  // ************************************************************

  test('test jumpToIndex with value (-1)', () => {
    expect(jumpToIndex(-1)).toBe(null);
  });

  test('test jumpToIndex with value (0)', () => {
    expect(jumpToIndex(0)).toBe(null);
  });

  test('test jumpToIndex with value (1)', () => {
    expect(jumpToIndex(1)).toBe(null);
  });

  // ************************************************************
  // ********************* clearHistory Function ****************
  // ************************************************************

  test('test clearHistory functionality', () => {
    expect(clearHistory()).toBe(undefined);
    expect(historyLength()).toBe(0);
  });
});

describe('testing the historyStack starting with initial values ["is", "class", "id"]', () => {
  beforeEach(() => initHistory(['is', 'class', 'id']));

  // ************************************************************
  // ********************* initHistory Function *****************
  // ************************************************************

  test('initialize the history after initialize the history', () => {
    expect(historyLength()).toBe(3);
    expect(getCurrentPosition()).toBe(2);
  });

  // ************************************************************
  // ********************* pushWord Function ********************
  // ************************************************************
  test('test pushWord with empty string word', () => {
    expect(pushWord('')).toBe(null);
  });

  test('test pushWord with an already existing word (is)', () => {
    expect(pushWord('is')).toBe('is');

    const findIndex = jest.fn(() => 0);
    expect(findIndex()).toBe(0);

    const splice = jest.fn(() => ['class', 'id']);
    expect(splice()).toEqual(['class', 'id']);

    expect(historyLength()).toBe(3);
    expect(getCurrentPosition()).toBe(2);
  });

  test('test pushWord with non existing word (play)', () => {
    expect(pushWord('play')).toBe('play');

    const findIndex = jest.fn(() => -1);
    expect(findIndex()).toBe(-1);

    expect(historyLength()).toBe(4);
    expect(getCurrentPosition()).toBe(3);
  });

  // ************************************************************
  // ********************* jumpToIndex Function *****************
  // ************************************************************

  test('test jumpToIndex with value (-1)', () => {
    expect(jumpToIndex(-1)).toBe(null);
  });

  test('test jumpToIndex with value (0)', () => {
    expect(jumpToIndex(0)).toBe('is');
  });

  test('test jumpToIndex with value (2)', () => {
    expect(jumpToIndex(2)).toBe('id');
  });

  test('test jumpToIndex with value (3)', () => {
    expect(jumpToIndex(3)).toBe(null);
  });
});

describe('test getPreviousWord and getNextWord tools together', () => {
  beforeAll(() => initHistory(['is', 'class', 'id']));

  // ************************************************************
  // ********************* getPreviousWord Function *************
  // ************************************************************

  test('test getPreviousWord first time', () => {
    expect(getPreviousWord()).toBe('class');
    expect(historyLength()).toBe(3);
    expect(getCurrentPosition()).toBe(1);
  });

  test('test getPreviousWord second time', () => {
    expect(getPreviousWord()).toBe('is');
    expect(historyLength()).toBe(3);
    expect(getCurrentPosition()).toBe(0);
  });

  test('test getPreviousWord while the currentPosition is at 0', () => {
    expect(getPreviousWord()).toBe(null);
    expect(historyLength()).toBe(3);
    expect(getCurrentPosition()).toBe(0);
  });

  // ************************************************************
  // ********************* getNextWord Function *****************
  // ************************************************************

  test('test getNextWord while the currentPosition is at index 0', () => {
    expect(getNextWord()).toBe('class');
    expect(historyLength()).toBe(3);
    expect(getCurrentPosition()).toBe(1);
  });

  test('test getNextWord while the second time', () => {
    expect(getNextWord()).toBe('id');
    expect(historyLength()).toBe(3);
    expect(getCurrentPosition()).toBe(2);
  });

  test('test getNextWord while the currentPosition equals to history.length', () => {
    expect(getNextWord()).toBe(null);
    expect(historyLength()).toBe(3);
    expect(getCurrentPosition()).toBe(2);
  });
});
