const test = require('blue-tape')
const sample = require('../src/index')

test('should pass', assert => {
    assert.equal(
        sample.test(),
        true,
        'equals true!',
    )
    assert.end()
})
