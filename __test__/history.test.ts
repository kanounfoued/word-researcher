import { pushWord, clearHistory, jumpToIndex } from '../src/history/history';

describe('testing the historyStack starting with empty array []', () => {
  // ************************************************************
  // ********************* pushWord Function ********************
  // ************************************************************

  test('test pushWord with empty string word', () => {
    expect(pushWord('')).toBe(null);
  });

  test('test pushWord with value (bill)', () => {
    expect(pushWord('bill')).toBe('bill');
  });

  test('test pushWord with value (eat)', () => {
    expect(pushWord('eat')).toBe('eat');
  });

  // ************************************************************
  // ********************* pushWord Function ********************
  // ************************************************************

  // ************************************************************
  // ********************* jumpToIndex Function ********************
  // ************************************************************

  test('test jumpToIndex with value (-1)', () => {
    expect(jumpToIndex(-1)).toBe(null);
  });

  test('test jumpToIndex with value (0)', () => {
    expect(jumpToIndex(0)).toBe('bill');
  });

  test('test jumpToIndex with value (1)', () => {
    expect(jumpToIndex(1)).toBe('eat');
  });

  test('test jumpToIndex with value greater than the length of the history', () => {
    expect(jumpToIndex(2)).toBe(null);
  });

  test('test jumpToIndex after clearing the history', () => {
    clearHistory();
    expect(jumpToIndex(0)).toBe(null);
  });

  // ************************************************************
  // ********************* jumpToIndex Function ********************
  // ************************************************************

  // ************************************************************
  // ********************* clearHistory Function ****************
  // ************************************************************

  test('test clearHistory functionality', () => {
    expect(clearHistory()).toBe(undefined);
  });

  // ************************************************************
  // ********************* clearHistory Function ****************
  // ************************************************************
});
