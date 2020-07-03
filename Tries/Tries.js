// JAVASCRIPT SYNTAX

const TrieNode = require('./TrieNode');

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // Adding a new word. Input is the new word
    add(input, node = this.root) { // If i pass the function a new node it will use that node otherwise it will use the root node
        if (input.length == 0) { // That menans we are ar the end of the word we have just passed in
            node.setEnd();
            return;
        } else if (!node.keys.has(input[0])) { // This will check if a letter of the word already exists or not. It will go word by word
            node.keys.set(input[0], new TrieNode()); // A new Node is created if it doesn't exist. I set the new letter as the key and the new Node as the value
            return this.add(input.substr(1), node.keys.get(input[0])); // Recursive function. We pass every letter after the first added letter here. Now instead of using the root node we pass the node we have just created to the function
        } else { // Else if the node letter already exists in the Trie then we won't create a new one we just add the rest of the substring left
            return this.add(input.substr(1), node.keys.get(input[0])); // The secpnd argument would be the last node which already exists
        }
    }

    // Check if it is a word in the Trie
    isWord(word) {
        let node = this.root;
        while (word.length > 1) { // While there are more characters to search
            if (!node.keys.has(word[0])) { // If there is no key with the first letter of the word passed then that means that the word doesn not exist in the tree so we quickly return false;
                return false;
            } else { // The word could exist
                node = node.keys.get(word[0]);
                word = word.substr(1); // We now continue with the rest of the string. We save a letter
            }
        }
        // True if the word is in the Trie or not
        return (node.keys.has(word) && node.keys.get(word).isEnd()) ? true : false;
    }

    // Printing the words
    print() {
        let words = [];
        let search = (node, string) => {
            if (node.keys.size != 0) { // If true that means there are still more letters to look through
                for (let letter of node.keys.keys()) { // For each letter we add that letter to the string
                    search(node.keys.get(letter), string.concat(letter)); // Recursion
                }
                if (node.isEnd()) { // If we get to the last letter that means we got a word so we push it to the array
                    words.push(string);
                }
            } else { // If the length is equal to 0
                string.length > 0 ? words.push(string) : undefined; // We add the letter to the array or we set it to undefined
                return;
            }
        };
        search(this.root, new String()); // We call the function for the first time here
        return words.length > 0 ? words : null; // If there are words return the array or return null
    }
}

module.exports = Trie;