// Implementation

class BloomFilter {
    constructor(size) {
        this.size = size; // Size of the Bloom Filter
        this.storage = new Array(size).fill(0, 0); // Array that will store the values which is filled with 0s
    }

    // Adding an element
    add(str) {
        // Each element is hashed 3 times and the resulting positions are changed to 1. If it is already a 1 it will stay the same
        this.storage[this.hashIt(str, this.size)] = 1;
        this.storage[this.hashIt2(str, this.size)] = 1;
        this.storage[this.hashIt3(str, this.size)] = 1;
    }

    // Searchiing an element
    contains(str) { // Returns true or false- COnverts the value 0 or 1 to boolean with !!. If one returns 0 it will return false, we need 3 true values to return true
        return !!this.storage[this.hashIt(str, this.size)] && !!this.storage[this.hashIt2(str, this.size)] && !!this.storage[this.hashIt3(str, this.size)]
    }

    // First hash function
    hashIt(str, size) { // Size is needed because it will limit the number the hash function will return. THis is a very basic hash function but used here to demonstrate the power of bloom filters
        let coded = 0;
        for (let i = 0; i < str.length; i++) {
            coded += str[i].charCodeAt() * i + 1;
        }
        return Math.floor(coded % size)
    }

    // Second hash function, returns different numbers
    hashIt2(str, size) {
        let coded = 0;
        for (let i = 0; i < str.length; i++) {
            coded += (str[i].charCodeAt() - i) * i + 1;
        }
        return Math.floor((coded * 2) % size)
    }

    // Third hash function, returns a different numbers
    hashIt3(str, size) {
        let coded = 0;
        for (let i = 0; i < str.length; i++) {
            coded += (str[i].charCodeAt() + i) * i + 1;
        }
        return Math.floor((coded * 3) % size)
    }


}


module.exports = BloomFilter;