// Testing the Bloom Filter

const BloomFilter = require('./BloomFilter.js')

let bf = new BloomFilter(15);

bf.add('abc');

console.log(bf.contains('abc'))
console.log(bf.contains('xyz'))
