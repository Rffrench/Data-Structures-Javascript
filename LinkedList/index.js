// main file to try the LinkedList

const LinkedListNode = require('./LinkedListNode');
const LinkedList = require('./LinkedList');

let list = new LinkedList();
let list2 = new LinkedList([1, 2, 3]);

console.log(new LinkedListNode(3));
console.log(new LinkedListNode(3, 10));
console.log(new LinkedListNode('string', true));

console.log(list.prepend(5));
console.log(list.append(25));
console.log(list.append(3));

console.log(list2.toArray());
console.log(list2.toArray(true));