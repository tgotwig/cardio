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
