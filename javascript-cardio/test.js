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

it('should capitalize letters', function () {
  const capitalizeLetters = (str) => {
    return String(str)
      .toLowerCase()
      .split(' ')
      .map((str) => str.substring(0, 1).toUpperCase() + str.substring(1))
      .join(' ')
  }

  assert.equal(capitalizeLetters('i love javascript'), 'I Love Javascript')
})

it('should return most frequent character', function () {
  const maxChar = (str) => {
    const charMap = {}
    let maxNum = 0
    let maxChar = ''

    String(str)
      .split('')
      .forEach((char) => {
        if (charMap[char]) {
          charMap[char]++
        } else {
          charMap[char] = 1
        }

        for (let char in charMap) {
          if (charMap[char] > maxNum) {
            maxNum = charMap[char]
            maxChar = char
          }
        }
      })
    return maxChar
  }

  assert.equal(maxChar('javascript'), 'a')
})

it('should solve fizzBuzz', function () {
  const fizzBuzz = (int) => {
    let output = ''
    for (var i = 1; i <= Number(int); i++) {
      output = ''
      if (i % 3 === 0) {
        output += 'fizz'
      }
      if (i % 5 === 0) {
        output += 'buzz'
      }
      if (output === '') {
        output += i
      }
    }
    return output
  }

  assert.equal(fizzBuzz(2), '2')
  assert.equal(fizzBuzz(3), 'fizz')
  assert.equal(fizzBuzz(15), 'fizzbuzz')
})
