// JAVASCRIPT SYNTAX

const LinkedListNode = require('./LinkedListNode');

// THis class will be used for creating the actual list that will hold all the values
// The head and the tail must be saved to know the first and the last item respectively
class LinkedList {
    constructor(value) {
        this.size = 0; // HOw many items are in the list
        this.head = null; // first
        this.tail = null; // last

        // If in the constructor I use an Array then I will return a LinkedList, if the value is not an array we return a TypeError
        if (value) {
            if (Array.isArray(value)) return this.fromArray(value);
            return new TypeError(value + ' is not iterable');
        }

        return this;


    }

    // Adding new values in front of the list to test the class
    prepend(value) {
        this.size += 1;

        const newNode = new LinkedListNode(value, this.head); // Defining a new node. Next value starts as null

        this.head = newNode; // updating head
        if (!this.tail) this.tail = newNode; // if no tail has been specified (because this is the first item in the list), then the head and tail should be the same.
        return this; // Returning the whole LinkedList
    }

    // Adding new values at the end of the list
    append(value) {
        this.size++;

        const newNode = new LinkedListNode(value); // Next is null

        // If this is the first element in the list, we update this.head and we can return the function early.
        if (!this.head) { // checks if it is null
            this.head = newNode;
            this.tail = newNode;
            return this;
        }

        // The actual last value will point to the new node and then its updated with that new node
        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    }

    // Delete a Node
    // By default, our function will delete all nodes of a certain value. But we can pass true as our second argument to just delete the first node we encounter with the given value.
    delete(value, deleteOne = false) {
        if (!this.head) return false;
        let deletedNode = null;

        // If the head needs to be deleted
        while (this.head && this.head.value === value) {
            this.size -= 1;
            deletedNode = this.head; // The node is actually never deleted but it becomes inaccessible
            this.head = this.head.next;
            if (deleteOne) return true;
        };

        let currentNode = this.head;


        // If any node except the head or tail needs to be deleted
        if (currentNode !== null) {
            while (currentNode.next) {
                if (currentNode.next.value === value) {
                    this.size -= 1;
                    deletedNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                    if (deleteOne) return true;
                } else {
                    currentNode = currentNode.next;
                };
            };
        };


        // If the tail needs to be deleted
        if (this.tail.value === value) {
            this.tail = currentNode;
        };
        if (deletedNode === null) {
            return false;
        } else {
            return true;
        };
    }


    // Converting To and From an Array
    // For convenience, it should be possible to provide an array in the constructor and get a LinkedList of items in that order — similar to the Set constructor.

    // The argument passed is an array
    fromArray(values) {
        values.forEach(value => {
            this.append(value); // Appending to LinkedList
            return this;

        });
    }

    // This method contains an argument named useNodes , which — when true — will fill the array with each LinkedListNode object, rather than just the value, which could be helpful for debugging.
    toArray(useNodes = false) {
        const nodes = [];
        let currentNode = this.head;
        while (currentNode) {
            nodes.push(useNodes ? currentNode : currentNode.value);
            currentNode = currentNode.next;
        }
        return nodes;
    }
}
module.exports = LinkedList



/*
head >> first Node
head.data >> Data of the first Node
head.next >> next Node
head.next.data >> data of the next Node



**Java syntax for Nodes of a linked list**
class Node {
    int data;
    Node next; // null by default

    //constructor
    Node(int data){
        this.data = data;
    }
}

// Creating Nodes
Node head = new Node(6); >> Head is the first element. Null next value by default
Node nodeB = new Node(3);
Node nodeC = new Node(4);
Node nodeD = new Node(2);
Node nodeE = new Node(1);

// Linking Nodes
head.next = nodeB;  >> Head is the first element
nodeB.next = nodeC;
nodeC.next = nodeD;
nodeD.next = nodeE;


***The above code is just an example of a simplify version of Linked Lists but it is not a convenient way of creating one. Creating a class that holds all the values and functions is the correct approach***


// Get the number of Nodes
static int countNodes(Node head){
    int count = 1;
    Node current = head;
    while(current.next != null){
        current = current.next;
        count+=1;
    }
    return count;
}

*/