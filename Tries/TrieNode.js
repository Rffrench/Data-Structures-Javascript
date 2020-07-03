/* TRIE NODE CLASS */
class TrieNode { // Each Node represents a letter
    constructor() {
        this.keys = new Map(); // This Map will be have all the child references, for example letters of the alphabet. The keys are like the names of other folders inside a folder and the values would be the actual content (key : value)
        this.end = false; // This means that the Node is the end letter of a Word so until that point there is a word
    }


    // Sets the end of a word
    setEnd() {
        this.end = true;
    }


    // WIll return true or false if its the end of the word
    isEnd() {
        return this.end;
    }

}

module.exports = TrieNode;