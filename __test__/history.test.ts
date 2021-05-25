import {
  pushWord,
  clearHistory,
  jumpToIndex,
  getPreviousWord,
  getNextWord,
  historyLength,
} from '../src/history/history';

describe('testing the historyStack starting with empty array []', () => {
  beforeEach(() => clearHistory());

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

  test('test getPreviousWord with after clearing the history', () => {
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
