// JAVASCRIPT SIMPLIFIED VERSION

var queue = [];
queue.push(2);         // queue is now [2]
queue.push(5);         // queue is now [2, 5]
var i = queue.shift(); // queue is now [5]
//console.log(i);              // displays 2


// JAVASCRIPT FROM SCRATCH QUEQUE

const QueueNode = require('./QueueNode.js');

class Queue {
    constructor(head, tail) {
        this.head = head; // Remove from the head
        this.tail = tail; // Add items to the tail
    }


    // Check if it is empty
    isEmpty() {
        return this.head == null;
    }

    // Search first item
    peek() {
        if (!this.head) { console.log('Head is null') } else { return this.head.data }; // Checks if head is null, if not returns the data
    }

    // Add
    enqueue(data) {
        const node = new QueueNode(data);
        if (this.tail != null) {
            this.tail.next = node; // Adds data at the last position
        }
        this.tail = node;

        if (this.head == null) { // If it is the first item the head will be set
            this.head = node;
        }
    }

    // Delete
    dequeue() {
        const data = this.head.data; // Queue removes the first item
        this.head = this.head.next;
        if (this.head == null) {
            this.tail = null;
        }
        return data; // Returns Data removed
    }
}

module.exports = Queue;