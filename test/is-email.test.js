import test from 'ava'
import {isEmail} from '../src'

test('test valid email address', t => {
  const email = "myemail@gmail.com"
  t.deepEqual(isEmail(email), true)
})

test('test invalid email address', t => {
  const email = "myemail%%%gmail.com"
  t.deepEqual(isEmail(email), false)
})
