// Testing the Queue

const Queue = require('./Queue');

queue = new Queue();
console.log(queue.isEmpty());


queue.enqueue(5);
queue.enqueue(8);
queue.enqueue(9);
queue.dequeue(); // Removes 5 and head is now 8

console.log(queue.peek()); // 8
console.log(queue.isEmpty());