// TRIES
/*
A trie is a tree-like data structure whose nodes store the letters of an alphabet. By structuring the nodes in a particular way, words and strings can be retrieved from the structure by traversing down a branch path of the tree.

Each trie has an empty root node, with links (or references) to other nodes — one for each possible alphabetic value.The shape and the structure of a trie is always a set of linked nodes, connecting back to an empty root node. An important thing to note is that the number of child nodes in a trie depends completely upon the total number of values possible. For example, if we are representing the English alphabet, then the total number of child nodes is directly connected to the total number of letters possible. In the English alphabet, there are 26 letters, so the total number of child nodes will be 26. Each child node will have 26 other child nodes because of the alpahabet.

Imagine, however, that we were creating a trie to hold words from the Khmer (Cambodian) alphabet, which is the longest known alphabet with 74 characters. In that case, the root node would contain 74 links to 74 other child nodes.

Tries were created to solve the very problem of representing a set of words
Tries are commonly used with autocomplete forms or when searching for something like in google. There you have all the alphabet characters in a tree where the children are other characters so it is easier to search. The tree is traversed down

The time complexity of searching, inserting, and deleting from a trie depends on the length of the word a that’s being searched for, inserted, or deleted, and the number of total words, n, making the runtime of these operations O(an). Of course, for the longest word in the trie, inserting, searching, and deleting will take more time and memory than for the shortest word in the trie

Each trie contains:
- A value, which might be null
- An array of references to child nodes, all of which also might be null

Generally, the value of the root node is an empty string: "" . That root node will also have an array that contains 26 references, all of which will point to null at first. As the trie grows, those pointers start to get filled up with references to other nodes nodes. If we are dealing with the English alphabet then every single node has 26 references to possible child nodes.


*** TRIES vs HASH TABLES ***

They are similar because both data structures use an array but they used a different secondary data structure:

Hash Table = Array + Linked List
Tries = Array + Pointers/References

The most obvious difference between hash tables and tries is that a trie has no need for a hash function, because every key can be represented in order (alphabetically), and is uniquely retrievable since every branch path to a string’s value will be unique to that key. The side effect of this is that there are no collisions to deal with, and thus a relying on the index of an array is enough, and a hashing function is unnecessary

However, unlike hash tables, the downside of a trie is that is takes up a lot of memory and space with empty (null) pointers. We can imagine how a large trie would start grow in size, and with each node that was added, an entire array containing 26 null pointers would have to be initialized as well. For longer words, those empty references would probably never get filled up; for example, imagine we had a key “Honorificabilitudinitatibus”, with some value. That’s super long word, and we’re probably not going to be adding any other sub-branches to that word in the trie; that’s a bunch of empty pointers for each letter of that word that are taking up space, but not really ever being used!


*** ADDING ***

- When adding, the tree is traversed looking at the pointers of each level and checking if it is null or not, if want to add the word "pie" then it would check for the pointer "p" if it doesnt exist it will create the new node "p". Then it will continue with "i" and do the same by checking the pointer, if it is null create it. If a word exists then the isWord boolean variable will be true


*** SEARCHING ***

- When searching, if we want to retrieve the value for the key "pie", we’ll traverse down from one array to another, using the indices to go from the nodes p, to i, to e; when we get to the node at the index for e, we’ll stop traversing, and retrieve the value from that node, which will be 5. If it does have a value, we can simply return it. This is sometimes referred to as a search hit, since we were able to find a value for the key.
But what if we search for something that doesn’t exist in our trie? What if we search for the word "pi", which we haven’t added as a key with a value? Well, we’ll go from the root node to the node at index p, and then we’ll go from the node at p to the node at index i. When we get to this point, we’ll see if the node at the branch path p-i has a value. In this case, it doesn’t have a value; it’s pointing at null. So, we can be sure that the key "pi" doesn’t exist in our trie as a string with a value. This is often referred to as a search miss, since we could not find a value for the key.


*** DELETING ***

First, we need to find the node that contains the value for that key, and set its value to null. This means traversing down and finding the last letter of the word "pies", and then resetting the value of the last node from 12 to null.

Second, we need to check the node’s references and see if all of its pointers to other nodes are also null. If all of them are empty, that means that there are no other words/branches below this one, and they can all be removed. However, if there are pointers for other nodes that do have values, we don’t want to delete the node that we’ve just set to null.

This last check is particularly important in order to not remove longer strings when we remove substrings of a word. But other than that single check, there’s nothing more to it!


Reference:
https://medium.com/basecs/trying-to-understand-tries-3ec6bede0014
*/


// JAVASCRIPT SYNTAX