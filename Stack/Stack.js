// JAVASCRIPT SIMPLIFIED VERSION

var stack = [];
stack.push(2);       // stack is now [2]
stack.push(5);       // stack is now [2, 5]
var i = stack.pop(); // stack is now [2]
//alert(i);            // displays 5


// JAVASCRIPT IMPLEMENTATION FROM SCRATCH

const StackNode = require('./StackNode');

// We don't use head and tail here, we just remove from the top
class Stack {
    constructor(top) {
        this.top = top;
    }

    // Check if the Stack is empty
    isEmpty() {
        return this.top == null;
    }

    // Search first item
    peek() {
        if (this.top == null) {
            console.log('No values in the Stack');
        } else {
            return this.top.data;
        }
    }

    // Add item
    push(data) {
        const node = new StackNode(data);
        node.next = this.top;
        this.top = node;

    }

    // Remove the first item of the Stack (the top one)
    pop() {
        const data = this.top.data;
        this.top = this.top.next;
        return data; // Returns Data removed
    }
}

module.exports = Stack;