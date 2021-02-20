'use strict'
import { strict as assert } from 'assert'

it('should reverse string', function () {
  const revStr = (str) => String(str).split('').reverse().join('')

  assert.equal(revStr('disney'), 'yensid')
})
