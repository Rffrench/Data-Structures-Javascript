// QUEUE

/*
A Queue is a linear structure which follows a particular order in which the operations are performed. The order is First In First Out (FIFO). A good example of a queue is any queue of consumers for a resource where the consumer that came first is served first. The difference between stacks and queues is in removing. In a stack we remove the item the most recently added; in a queue, we remove the item the least recently added.

The operation of adding an element to the rear of the queue is known as enqueue, and the operation of removing an element from the front is known as dequeue. Other operations may also be allowed, often including a peek or front operation that returns the value of the next element to be dequeued without dequeuing it. 

- Linear Data Structure
- Flexible Size
- First In First Out


Reference: HackerRank on Youtube

*/






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