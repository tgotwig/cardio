'use strict'
import { strict as assert } from 'assert'

// Topic: Reverse string
it('should reverse string', function () {
  const revStr = (str) => String(str).split('').reverse().join('')

  assert.equal(revStr('disney'), 'yensid')
})

// Topic: Is palindrome
it('should be palindrome', function () {
  const isPalindrome = (str) => String(str).split('').reverse().join('') === str

  assert.equal(isPalindrome('hello'), false)
  assert.equal(isPalindrome('bob'), true)
  assert.equal(isPalindrome('racecar'), true)
})

// Topic: Reverse int
it('should reverse int', function () {
  const revInt = (int) => {
    const revStr = Number(int).toString().split('').reverse().join('')
    return parseInt(revStr) * Math.sign(int)
  }

  assert.equal(revInt(12345), 54321)
  assert.equal(revInt(-12345), -54321)
})

// Topic: Capitalize letters
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

// Topic: Max character
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

// Topic: Fizz buzz
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

// Topic: Longest words
it('should find longest words', function () {
  const longestWords = (str) => {
    const words = Array.from(
      String(str)
        .toLowerCase()
        .match(/[a-z0-9]+/g)
    )
    const sorted = words.sort((a, b) => String(b).length - String(a).length)
    return sorted.filter((word) => word.length === sorted[0].length)
  }

  assert.deepStrictEqual(longestWords('Hello there, my name is Tom'), [
    'hello',
    'there',
  ])
})

// Topic: Chunk array
it('should chunk array', function () {
  const chunkArray = (arr, len) => {
    const chunkedArr = []
    Array.from(arr).forEach((val) => {
      const last = chunkedArr[chunkedArr.length - 1]
      !last || last.length === Number(len)
        ? chunkedArr.push([val])
        : last.push(val)
    })
    return chunkedArr
  }

  assert.deepStrictEqual(chunkArray([1, 2, 3, 4, 5, 6, 7], 3), [
    [1, 2, 3],
    [4, 5, 6],
    [7],
  ])
})

// Topic: Flatten array
it('should flatten array', function () {
  const flattenArray = (arrays) => Array.from(arrays).flat(Infinity)

  assert.deepStrictEqual(
    flattenArray([[1, 2], [3, 4], [5, 6], [7]]),
    [1, 2, 3, 4, 5, 6, 7]
  )
})

// Topic: Is anagram
it('should be Anagram', function () {
  const isAnagram = (str1, str2) => {
    const formatStr = (str) =>
      str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
    return formatStr(str1) === formatStr(str2)
  }

  assert.equal(isAnagram('elbow', 'below'), true)
  assert.equal(isAnagram('Tom', 'Ben'), false)
})

// Topic: Sum all
it('should sum all', function () {
  const addAll = (...numbers) => numbers.reduce((acc, cur) => acc + cur)

  assert.equal(addAll(1, 2, 3), 6)
})

// Topic: Sum all primes
it('should sum all primes', function () {
  const sumAllPrimes = (num) => {
    let total = 0

    function checkForPrime(i) {
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          return false
        }
      }
      return true
    }

    for (let i = 2; i <= num; i++) {
      if (checkForPrime(i)) {
        total += i
      }
    }
    return total
  }

  assert.equal(sumAllPrimes(10), 17)
})

// Topic: Seek and destroy
it('should seek and destoy', function () {
  const seekAndDestroy = (arr, ...rest) =>
    arr.filter((val) => !rest.includes(val))

  assert.deepStrictEqual(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6), [
    3,
    4,
    'hello',
  ])
})

// Topic: Sort by height
it('should sort by height', function () {
  const sortByHeight = (arr) => {
    const arr1 = []
    const arr2 = []

    arr.forEach((val, i) => (val === -1 ? arr1.push(i) : arr2.push(val)))

    const sortArr = arr2.sort((a, b) => a - b)

    arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1))

    return sortArr
  }

  assert.deepStrictEqual(
    sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]),
    [-1, 150, 160, 170, -1, -1, 180, 190]
  )
})
