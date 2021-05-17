import { findOne } from '../KMP';

test('testing findOne functionality with empty params', () => {
  expect(findOne('', '')).toBe(null);
});

test('testing findOne functionality with empty word', () => {
  expect(findOne('this is a nice text for search', '')).toBe(null);
});

test('testing findOne functionality with empty the word text', () => {
  expect(findOne('this is a nice text for search', 'text')).toBe(15);
});
