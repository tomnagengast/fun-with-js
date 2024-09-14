// You can write tests out of the box
// node test.js
import assert from 'node:assert'
import test from 'node:test'

test('that 1 is equal 1', () => {
    assert.strictEqual(1, 1)
})

test.skip('that throws as 1 is not equal 2', () => {
    // throws an exception because 1 != 2
    assert.strictEqual(1, 2)
})
