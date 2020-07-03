// JAVASCRIPT SYNTAX

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