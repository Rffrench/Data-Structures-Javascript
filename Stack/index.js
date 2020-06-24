// Testing the Stack

const Stack = require('./Stack');

stack = new Stack();
console.log(stack.isEmpty());

stack.push(5);
stack.push(15);
stack.push(33);
stack.pop(); // Removes 5

console.log(stack.isEmpty());
console.log(stack.peek()); // 15