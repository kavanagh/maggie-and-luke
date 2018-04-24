const assert = require('assert');

const anagram = require('./anagram');

assert.strictEqual(anagram('melon', 'lemon'), true);

assert.strictEqualassert(anagram('foo', 'bar'), false);

assert.strictEqual(anagram('dog', 'crocodile'), false);

assert.strictEqual(anagram('word', null), false);

// TODO: what tests are missing?