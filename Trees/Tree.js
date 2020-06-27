// TREE
/*
*** WHAT IS IT? ***

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


*** BINARY TREE vs BINARY SEARCH TREE ***



- Binary Tree:

A node in the tree can have at most two children, one on the left and one on the right. This way of structuring data helps us to form a tree and using this we can write efficient algorithms to insert, search and delete values. This is called a binary tree.



- Binary Search Tree: 

A binary search tree is a binary tree that stores the data in a sorted sequence. It only allows us to store nodes with lesser values on the left and the nodes with a bigger value on the right.
A binary search tree is always a binary tree but vice versa cannot be always true.



*** SUMMARY ***


- The tree is a data structure where a node has 0 or more descendants/children.
- Tree nodes don’t have cycles (acyclic). If it has cycles, it is a Graph data structure instead.
- Trees with two children or less are called: Binary Tree
- When a Binary Tree is sorted in a way that the left value is less than the parent and the right children is higher, then and only then we have a Binary Search Tree.
- You can visit a tree in a pre/post/in-order fashion.
- An unbalanced has a time complexity of O(n). 🤦🏻‍
- A balanced has a time complexity of O(log n). 🎉


Reference:
https://learnersbucket.com/tutorials/data-structures/tree-data-structure-in-javascript/ 
https://adrianmejia.com/data-structures-for-beginners-trees-binary-search-tree-tutorial/
https://www.youtube.com/watch?v=oSWTXtMglKE&list=PLI1t_8YX-Apv-UiRlnZwqqrRT8D1RhriX&index=7
 */

const BinarySearchTree = function () {
    const Node = function (key) {
        this.key = key,
            this.left = null,
            this.right = null
    }

    let root = null;

    let insertNode = function (node, newNode) {
        //If new value is less than the current 
        if (newNode.key < node.key) {
            //If left is empty 
            if (node.left === null) {
                node.left = newNode;
            } else {
                // Recursively call the same function to descend one level and check again and add it and so on.
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                //If right is empty 
                node.right = newNode;
            } else {
                // Descend one level recursively and check again and keep doing till the element is added at the right spot.
                insertNode(node.right, newNode);
            }
        }
    }

    // Helper isnert function
    this.insert = function (key) {
        let newNode = new Node(key);
        //If no root then add at root
        if (root == null) {
            root = newNode;
        } else {
            //Find the appropriate place to insert the new node
            insertNode(root, newNode);
        }
    }

    // A key that needs to be searched can be present at any node. So to check if it is present in the tree or not we need to check each node of the tree. For this, we will recursively call the same search function which will check for both the left and right child and return true if the key is present, false otherwise.
    this.search = (key, node = root) => {
        //If no element then return false
        if (node === null) {
            return false;
        }

        //Else recursively check if the key is present at any descendants
        if (key < node.key) {
            //Check the left descendants
            return this.search(key, node.left);
        } else if (key > node.key) {
            //Check the right descendants
            return this.search(key, node.right);
        } else {
            return true;
        }
    }

    // As the lesser value are stored on the left, To find the MIN value we will need to return the data of the left most descendant.
    this.min = (node = root) => {
        if (node) {
            //Return the left most descendant's value
            while (node && node.left !== null) {
                node = node.left;
            }

            return node.key
        }

        return null;
    }

    // As the greater value are stored on the right, To find the MAX value we will need to return the data of the right most descendant.
    this.max = (node = root) => {
        if (node) {
            //Return the right most descendant's value
            while (node && node.right !== null) {
                node = node.right;
            }

            return node.key
        }

        return null;
    }



    /* This is one of the most complex method because we have to handle multiple cases while removing a node.
    To handle such complex scenarios we will use a helper function which helps to manage this effectively. This helper function will return the node which we will need to assign to the ancestors and at last to the root.

    First, we will need to check if the node with the given key is present or not in the tree.
    If found then there are three different cases that we need to tackle. */
    this.remove = (key) => {
        root = removeNode(root, key);
    }

    const removeNode = (node, key) => {
        if (node === null) {
            return null;
        }

        //Recursively find the node with given key
        if (key < node.key) {
            node.left = removeNode(node.left, key);
            return node;
        } else if (key > node.key) {
            node.right = removeNode(node.right, key);
            return node;
        } else {

            //When a node is found with the given key
            //There are three different cases which need to be handled



            /*If the node has no child then we can change the value to null to remove it. But this won't work because of the parent node pointing to it and it will still have the left and right pointers. We will need to remove the current node and change the parent node to point to null.
            That is why we need to return the value so that the ancestors can change their reference. */

            //Node is leaf or with no child
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }



            /*In this case, will remove the current node and make the parent point to its grandchildren.
            If the node does not have a left child then we will update the reference to the right child and return the reference. Same if the node does not have a right child then we will update the reference to the left child and return it. */

            //Node with one child
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }



            /*
            This is the most complex case, to either remove a right or left child we need to handle four different operations.
            - Once the node that needs to be removed is found, we need to find the minimum node from its right edge subtree.
            - Then we will update the value of the node with the value of the minimum node from the right edge subtree.
            - Now we have two nodes in the tree with same value which cannot happen so we need to remove the minimum node of the right edge subtree as we replaced this with the removed node.
            - Finally, return the updated node to its parent.
             */

            //Node with two child
            let aux = this.min(node.right);
            node.key = aux.key;
            node.right = removeNode(node.right, aux.key);
            return node;
        }
    }
}



// Testing
const tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);

tree.remove(18);
console.log(tree.min()); // 3
console.log(tree.max()); // 25 
console.log(tree.search(18)); // false