import { findOne, eval_KMP_prefix } from '../KMP';

const text = `The phrase hangs like a banner above the ruptures of 2020—a year that began three months into a civil rebellion in Iraq, which, like its Western torturer, saw the largest uprising in national history. Last spring I Was reminded of the demonstration where I first saw windows smashed: I was 20, at the 2012 march against NATO in Chicago, just after the “end” of the Second Gulf War.`;

// ************************************************************
// ********************* findOne Function *********************
// ************************************************************

test('testing findOne functionality with empty params', () => {
  expect(findOne('', '')).toBe(-1);
});

test('testing findOne functionality with empty word', () => {
  expect(findOne('this is a nice text for search', '')).toBe(-1);
});

test('testing findOne functionality with the word text', () => {
  expect(findOne('this is a nice text for search', 'text')).toBe(15);
});

test('testing findOne functionality with the word Was and non case-sensative', () => {
  expect(findOne(text, 'Was')).toBe(215);
});

test('testing findOne functionality with the word was and non case-sensative', () => {
  expect(findOne(text, 'was')).toBe(215);
});

test('testing findOne functionality with the word Was and case-sensative', () => {
  expect(findOne(text, 'Was', { caseSensative: true })).toBe(215);
});

test('testing findOne functionality with the word was and case-sensative', () => {
  expect(findOne(text, 'was', { caseSensative: true })).toBe(286);
});

// ************************************************************
// ********************* findOne Function *********************
// ************************************************************

// ************************************************************
// ****************** teval_KMP_prefix tests ******************
// ************************************************************

test('testing eval_KMP_prefix functionality for an empty string', () => {
  expect(eval_KMP_prefix('')).toEqual([]);
});

test('testing eval_KMP_prefix functionality for a sequence of numbers', () => {
  expect(eval_KMP_prefix('23452346')).toEqual([0, 0, 0, 0, 1, 2, 3, 0]);
});

test('testing eval_KMP_prefix functionality for a sequence of string', () => {
  expect(eval_KMP_prefix('abfdchjhabuiokabf')).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 1, 2, 3]);
});

test('testing eval_KMP_prefix functionality for a sequence of string case-sensative', () => {
  expect(eval_KMP_prefix('abfDchJhab')).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 1, 2]);
});

// ************************************************************
// ****************** teval_KMP_prefix tests ******************
// ************************************************************
