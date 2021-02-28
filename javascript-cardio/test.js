'use strict'
import { strict as assert } from 'assert'

it('should reverse string', function () {
  const revStr = (str) => String(str).split('').reverse().join('')

  assert.equal(revStr('disney'), 'yensid')
})

it('should be palindrome', function () {
  const isPalindrome = (str) => String(str).split('').reverse().join('') === str

  assert.equal(isPalindrome('hello'), false)
  assert.equal(isPalindrome('bob'), true)
  assert.equal(isPalindrome('racecar'), true)
})

it('should reverse int', function () {
  const revInt = (int) => {
    const revStr = Number(int).toString().split('').reverse().join('')
    return parseInt(revStr) * Math.sign(int)
  }

  assert.equal(revInt(12345), 54321)
  assert.equal(revInt(-12345), -54321)
})
