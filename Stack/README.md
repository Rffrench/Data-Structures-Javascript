# STACK

A stack is a special area of computer's memory which stores temporary variables created by a function. In stack, variables are declared, stored and initialized during runtime.

It is a temporary storage memory. When the computing task is complete, the memory of the variable will be automatically erased. The stack section mostly contains methods, local variable, and reference variables. Memory is allocated in a contiguous block.

The stack is the memory set aside as scratch space for a thread of execution. When a function is called, a block is reserved on the top of the stack for local variables and some bookkeeping data. When that function returns, the block becomes unused and can be used the next time a function is called. The stack is always reserved in a LIFO (last in first out) order; the most recently reserved block is always the next block to be freed. This makes it really simple to keep track of the stack; freeing a block from the stack is nothing more than adjusting one pointer.

The stack is attached to a thread, so when the thread exits the stack is reclaimed. The heap is typically allocated at application startup by the runtime, and is reclaimed when the application (technically process) exits.

- A stack is First IN Last Out
- A stack is a linear data structure
- Only used for local variables
- The size of the stack is set when a thread is created.
- High-speed access
- Main issue: Shortage of memory

## ADVANTAGES / DISADVANTAGES 

**Advantages:**
- Helps you to manage the data in a Last In First Out(LIFO) method which is not possible with Linked list and array.
- When a function is called the local variables are stored in a stack, and it is automatically destroyed once returned.
- A stack is used when a variable is not used outside that function.
- It allows you to control how memory is allocated and deallocated.
- Stack automatically cleans up the object.
- Not easily corrupted
- Variables cannot be resized.

**Disadvantages:**
- Stack memory is very limited.
- Creating too many objects on the stack can increase the risk of stack overflow.
- Random access is not possible.
- Variable storage will be overwritten, which sometimes leads to undefined behavior of the function or program.
- The stack will fall outside of the memory area, which might lead to an abnormal termination.


## When to use the Heap or stack? 

Each thread gets a stack, while there's typically only one heap for the application (although it isn't uncommon to have multiple heaps for different types of allocation).

You should use heap when you require to allocate a large block of memory. For example, you want to create a large size array or big structure to keep that variable around a long time then you should allocate it on the heap.

However, If you are working with relatively small variables that are only required until the function using them is alive. Then you need to use the stack, which is faster and easier.



## Reference:
- https://www.guru99.com/stack-vs-heap.html
- https://stackoverflow.com/questions/79923/what-and-where-are-the-stack-and-heap?rq=1
