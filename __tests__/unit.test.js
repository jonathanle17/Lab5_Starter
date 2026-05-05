// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
/**
 * isPhoneNumber tests
 */
test('isPhoneNumber returns true for valid phone number with parentheses', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber returns true for valid phone number with dashes', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber returns false for phone number with too few digits', () => {
  expect(isPhoneNumber('123-456')).toBe(false);
});

test('isPhoneNumber returns false for letters instead of numbers', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

/**
 * isEmail tests
 */
test('isEmail returns true for a standard email address', () => {
  expect(isEmail('jdoe@gmail.com')).toBe(true);
});

test('isEmail returns true for email with underscore in username', () => {
  expect(isEmail('user_test@ucsd.edu')).toBe(true);
});

test('isEmail returns false for email missing the top-level domain', () => {
  expect(isEmail('jdoe@gmail')).toBe(false);
});

test('isEmail returns false for email missing the @ symbol', () => {
  expect(isEmail('jdoegmail.com')).toBe(false);
});

/**
 * isStrongPassword tests
 */
test('isStrongPassword returns true for a valid long password', () => {
  expect(isStrongPassword('Pass_word123')).toBe(true);
});

test('isStrongPassword returns true for the minimum valid password', () => {
  expect(isStrongPassword('abcd')).toBe(true);
});

test('isStrongPassword returns false for a password starting with a number', () => {
  expect(isStrongPassword('1Password')).toBe(false);
});

test('isStrongPassword returns false for a password that is too short', () => {
  expect(isStrongPassword('abc')).toBe(false);
});

/**
 * isDate tests
 */
test('isDate returns true for standard date format', () => {
  expect(isDate('11/11/2022')).toBe(true);
});

test('isDate returns true for date with single-digit month and day', () => {
  expect(isDate('1/1/1999')).toBe(true);
});

test('isDate returns false for date with a 2-digit year', () => {
  expect(isDate('11/11/22')).toBe(false);
});

test('isDate returns false for date using dashes instead of slashes', () => {
  expect(isDate('11-11-2022')).toBe(false);
});

/**
 * isHexColor tests
 */
test('isHexColor returns true for 3-character hex code with hash', () => {
  expect(isHexColor('#FFF')).toBe(true);
});

test('isHexColor returns true for 6-character hex code without hash', () => {
  expect(isHexColor('000000')).toBe(true);
});

test('isHexColor returns false for invalid characters', () => {
  expect(isHexColor('#GGG')).toBe(false);
});

test('isHexColor returns false for hex code that is too long', () => {
  expect(isHexColor('#ABCDEFF')).toBe(false);
});