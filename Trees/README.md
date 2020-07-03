# TREE

## WHAT IS IT?

A tree is a data structure where a node can have zero or more children. Each node contains a value. Like graphs, the connection between nodes is called edges. A tree is a type of graph, but not all of them are trees (more on that later).
These data structures are called “trees” because the data structure resembles a tree 🌳. It starts with a root node and branch off with its descendants, and finally, there are leaves

A tree has a root node at the very top and child nodes that also can have other child nodes. A node that does not have child is called Leaf Node. Usually when we talk about Trees we refer about Binary Search Trees which are Tress that have a specific ordering property, so on any subtree the left nodes are less than root node which is less than all the right nodes, this makes searching really fast

Trees nodes can have zero or more children. However, when a tree has at the most two children, then it’s called binary tree. 

We need to take care that the tree does not get unbalanced! If we added numbers in ascending order we would propbably end up with with Nodes in only one side thus affecting performance

Trees are the basis for other very used data structures like Maps and Sets. Also, they are used on databases to perform quick searches. For example the DOM of a website is a tree.

There are 3 main ways of traversing a tree: 

- In-Order Traversal: left, parent, right.
- Post-Order Traversal: left, right, parent.
- Pre-Order Traversal and DFS: parent, left, right.


## BINARY TREE vs BINARY SEARCH TREE



- Binary Tree:

A node in the tree can have at most two children, one on the left and one on the right. This way of structuring data helps us to form a tree and using this we can write efficient algorithms to insert, search and delete values. This is called a binary tree.



- Binary Search Tree: 

A binary search tree is a binary tree that stores the data in a sorted sequence. It only allows us to store nodes with lesser values on the left and the nodes with a bigger value on the right.
A binary search tree is always a binary tree but vice versa cannot be always true.



## SUMMARY 


- The tree is a data structure where a node has 0 or more descendants/children.
- Tree nodes don’t have cycles (acyclic). If it has cycles, it is a Graph data structure instead.
- Trees with two children or less are called: Binary Tree
- When a Binary Tree is sorted in a way that the left value is less than the parent and the right children is higher, then and only then we have a Binary Search Tree.
- You can visit a tree in a pre/post/in-order fashion.
- An unbalanced has a time complexity of O(n). 🤦🏻‍
- A balanced has a time complexity of O(log n). 🎉


## Reference:
- https://learnersbucket.com/tutorials/data-structures/tree-data-structure-in-javascript/ 
- https://adrianmejia.com/data-structures-for-beginners-trees-binary-search-tree-tutorial/
- https://www.youtube.com/watch?v=oSWTXtMglKE&list=PLI1t_8YX-Apv-UiRlnZwqqrRT8D1RhriX&index=7
