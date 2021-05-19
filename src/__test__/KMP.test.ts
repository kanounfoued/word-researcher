import { findOne, evalKMPPrefix } from '../KMP';

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
// ****************** evalKMPPrefix tests ******************
// ************************************************************

test('testing evalKMPPrefix functionality for an empty string', () => {
  expect(evalKMPPrefix('')).toEqual([]);
});

test('testing evalKMPPrefix functionality for a sequence of numbers', () => {
  expect(evalKMPPrefix('23452346')).toEqual([0, 0, 0, 0, 1, 2, 3, 0]);
});

test('testing evalKMPPrefix functionality for a sequence of string', () => {
  expect(evalKMPPrefix('abfdchjhabuiokabf')).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 1, 2, 3]);
});

test('testing evalKMPPrefix functionality for a sequence of string case-sensative', () => {
  expect(evalKMPPrefix('abfDchJhab')).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 1, 2]);
});

// ************************************************************
// ****************** evalKMPPrefix tests ******************
// ************************************************************
