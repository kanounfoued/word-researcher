import { evalKMPPrefix } from '../src/KMP-utils/KMP';
import { findOne, findAll, skipThenFind } from '../src/index';

const text = `The phrase hangs like a banner above the ruptures of 2020—a year that began three months into a civil rebellion in Iraq, which, like its Western torturer, saw the largest uprising in national history. Last spring I Was reminded of the demonstration where I first saw windows smashed: I was 20, at the 2012 march against NATO in Chicago, just after the “end” of the Second Gulf War.`;

// ************************************************************
// ********************* findOne Function *********************
// ************************************************************

test('testing findOne functionality with empty params', () => {
  expect(findOne('', '')).toBe(-1);
});

test('testing findOne functionality with unexistant word', () => {
  expect(findOne(text, 'cool')).toBe(-1);
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
// ****************** evalKMPPrefix tests *********************
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
// ****************** findAll tests ***************************
// ************************************************************

test('testing findAll functionality with empty params', () => {
  expect(findAll('', '')).toEqual([]);
});

test('testing findAll functionality with unexistant word', () => {
  expect(findAll(text, 'cool')).toEqual([]);
});

test('testing findAll functionality with empty word', () => {
  expect(findAll('this is a nice text for search', '')).toEqual([]);
});

test('testing findAll functionality with the word text', () => {
  expect(findAll('this is a nice text for search', 'text')).toEqual([15]);
});

test('testing findAll functionality with the word Was and non case-sensative', () => {
  expect(findAll(text, 'Was')).toEqual([215, 286]);
});

test('testing findAll functionality with the word was and non case-sensative', () => {
  expect(findAll(text, 'was')).toEqual([215, 286]);
});

test('testing findAll functionality with the word Was and case-sensative', () => {
  expect(findAll(text, 'Was', { caseSensative: true })).toEqual([215]);
});

test('testing findAll functionality with the word was and case-sensative', () => {
  expect(findAll(text, 'was', { caseSensative: true })).toEqual([286]);
});

// ************************************************************
// ****************** skipThenFind tests *******************
// ************************************************************

test('testing findAllWithSkip functionality with empty params', () => {
  expect(skipThenFind('', '')).toEqual([]);
});

test('testing skipThenFind functionality with unexistant word', () => {
  expect(skipThenFind(text, 'cool')).toEqual([]);
});

test('testing skipThenFind functionality with empty word', () => {
  expect(skipThenFind('this is a nice text for search', '')).toEqual([]);
});

test('testing skipThenFind functionality with (history) word without passed options', () => {
  expect(skipThenFind(text, 'the', {})).toEqual([0, 37, 159, 231, 297, 348, 361]);
});

test('testing skipThenFind functionality with (the) word and case-sensative option', () => {
  expect(skipThenFind(text, 'the', { caseSensative: true })).toEqual([37, 159, 231, 297, 348, 361]);
});

test('testing skipThenFind functionality with (The) word and case-sensative option', () => {
  expect(skipThenFind(text, 'The', { caseSensative: true })).toEqual([0]);
});

test('testing skipThenFind functionality with (the) word and {skipXFirstResults: 0} option', () => {
  expect(skipThenFind(text, 'the', { skipXFirstResults: 0 })).toEqual([0, 37, 159, 231, 297, 348, 361]);
});

test('testing skipThenFind functionality with (the) word and {skipXFirstResults: 2} option', () => {
  expect(skipThenFind(text, 'the', { skipXFirstResults: 2 })).toEqual([159, 231, 297, 348, 361]);
});

test('testing skipThenFind functionality with (the) word and {skipXFirstResults: 7} option', () => {
  expect(skipThenFind(text, 'the', { skipXFirstResults: 7 })).toEqual([]);
});

test('testing skipThenFind functionality with (the) word and {skipXLastResults: 0} option', () => {
  expect(skipThenFind(text, 'the', { skipXLastResults: 0 })).toEqual([0, 37, 159, 231, 297, 348, 361]);
});

test('testing skipThenFind functionality with (the) word and {skipXLastResults: -2} option', () => {
  expect(skipThenFind(text, 'the', { skipXLastResults: -2 })).toEqual([0, 37, 159, 231, 297]);
});

test('testing skipThenFind functionality with (the) word and {skipXLastResults: -9} option', () => {
  expect(skipThenFind(text, 'the', { skipXLastResults: -9 })).toEqual([]);
});
