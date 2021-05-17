import { findOne, eval_KMP_prefix } from '../KMP';

test('testing findOne functionality with empty params', () => {
  expect(findOne('', '')).toBe(null);
});

test('testing findOne functionality with empty word', () => {
  expect(findOne('this is a nice text for search', '')).toBe(null);
});

test('testing findOne functionality with empty the word text', () => {
  expect(findOne('this is a nice text for search', 'text')).toBe(15);
});

// teval_KMP_prefix tests
test('testing eval_KMP_prefix functionality for an empty string', () => {
  expect(eval_KMP_prefix('')).toEqual([]);
});

test('testing eval_KMP_prefix functionality for a sequence of numbers', () => {
  expect(eval_KMP_prefix('23452346')).toEqual([0, 0, 0, 0, 1, 2, 3, 0]);
});

test('testing eval_KMP_prefix functionality for a sequence of string', () => {
  expect(eval_KMP_prefix('abfdchjhabuiokabf')).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 1, 2, 3]);
});
