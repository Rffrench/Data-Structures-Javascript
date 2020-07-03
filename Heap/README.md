# HEAP
The heap is a memory used by programming languages to store global variables. By default, all global variable are stored in heap memory space. It supports Dynamic memory allocation.

The heap is not managed automatically for you and is not as tightly managed by the CPU. It is more like a free-floating region of memory. Memory is allocated in any random order.

The heap is memory set aside for dynamic allocation. Unlike the stack, there's no enforced pattern to the allocation and deallocation of blocks from the heap; you can allocate a block at any time and free it at any time. This makes it much more complex to keep track of which parts of the heap are allocated or free at any given time; there are many custom heap allocators available to tune heap performance for different usage patterns.

- A heap is a hierarchical data structure
- Allows you to access global variables
- Slower compared to Stack
- The size of the heap is set on application startup, but can grow as space is needed (the allocator requests more memory from the operating system).
- Main issue: Memory fragmentation

- Heaps are usually used for Heap Sort, an efficient sorting algorithm which is very popular! They are a partially ordered binary tree. Each Node can allocate 2 child nodes. Heaps are usually stored as arrays with no index 0

- Max Heap = children are less than the parent node
- Min Heap = children are greater than the parent node


## ADVANTAGES / DISADVANTAGES

**Advantages:**
- Heap helps you to find the greatest and minimum number
- Garbage collection runs on the heap memory to free the memory used by the object.
- Heap method also used in the Priority Queue.
- It allows you to access variables globally.
- Heap doesn't have any limit on memory size.

**Disadvantages:**
- It can provide the maximum memory an OS can provide
- It takes more time to compute.
- Memory management is more complicated in heap memory as it is used globally.
- It takes too much time in execution compared to the stack.



## When to use the Heap or stack?

Each thread gets a stack, while there's typically only one heap for the application (although it isn't uncommon to have multiple heaps for different types of allocation).

You should use heap when you require to allocate a large block of memory. For example, you want to create a large size array or big structure to keep that variable around a long time then you should allocate it on the heap.

However, If you are working with relatively small variables that are only required until the function using them is alive. Then you need to use the stack, which is faster and easier.




## Reference:
- https://www.guru99.com/stack-vs-heap.html
- https://stackoverflow.com/questions/79923/what-and-where-are-the-stack-and-heap?rq=1
- https://www.youtube.com/watch?v=dM_JHpfFITs
