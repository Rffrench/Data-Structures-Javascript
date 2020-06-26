// HEAP
/*
The heap is a memory used by programming languages to store global variables. By default, all global variable are stored in heap memory space. It supports Dynamic memory allocation.

The heap is not managed automatically for you and is not as tightly managed by the CPU. It is more like a free-floating region of memory. Memory is allocated in any random order.

The heap is memory set aside for dynamic allocation. Unlike the stack, there's no enforced pattern to the allocation and deallocation of blocks from the heap; you can allocate a block at any time and free it at any time. This makes it much more complex to keep track of which parts of the heap are allocated or free at any given time; there are many custom heap allocators available to tune heap performance for different usage patterns.

- A heap is a hierarchical data structure
- Allows you to access global variables
- Slower compared to Stack
- The size of the heap is set on application startup, but can grow as space is needed (the allocator requests more memory from the operating system).
- Main issue: Memory fragmentation

*** ADVANTAGES / DISADVANTAGES ***

Advantages:
- Heap helps you to find the greatest and minimum number
- Garbage collection runs on the heap memory to free the memory used by the object.
- Heap method also used in the Priority Queue.
- It allows you to access variables globally.
- Heap doesn't have any limit on memory size.

Disadvantages:
- It can provide the maximum memory an OS can provide
- It takes more time to compute.
- Memory management is more complicated in heap memory as it is used globally.
- It takes too much time in execution compared to the stack.



*** When to use the Heap or stack? ***

Each thread gets a stack, while there's typically only one heap for the application (although it isn't uncommon to have multiple heaps for different types of allocation).

You should use heap when you require to allocate a large block of memory. For example, you want to create a large size array or big structure to keep that variable around a long time then you should allocate it on the heap.

However, If you are working with relatively small variables that are only required until the function using them is alive. Then you need to use the stack, which is faster and easier.


*** WHAT IS A PERMUTATION? ***

A Permutation of a collection of elements is the list of all the possible ways you can order the elements. All the possible combinations
E.g: [1,2,3] = [1,2,3] [1,3,2] [2,1,3] [2,3,1] [3,2,1] [3,1,2]

The number of permutations 'n' can be calculated by the total count factorial n!.
E.g: N = 3 >> 3*2*1 = 6 permutations (Factorial 3!)
     N = 4 >> 4*3*2*1 = 24 permutations (Factorial 4!)

*Heap's Algorithm is one way to get all these permutations


*** NOTES ABOUT THE ACTUAL ALGORITHM ***

- The algorithm is HARD and UNINTUITIVE. Probably around 99% of the programmers wouldn't be able to come with a solution by their own without looking at the code
- This is a algorithm you study, not come up with on your own.
- Recursion is something that is needed to understand it



Reference:
https://www.guru99.com/stack-vs-heap.html
https://stackoverflow.com/questions/79923/what-and-where-are-the-stack-and-heap?rq=1
https://www.youtube.com/watch?v=xghJNlMibX4   >>> This video thoroughly explains the syntax
 */

// JAVASCRIPT SYNTAX


// THis will get all the permutations as an array, each element will be another array of the permutations
const getPermutations = arr => {


    const output = []; // output that will have the arrays

    // This function will swap the postion of an element of an array based on the indexes.
    const swapInPlace = (arrToSwap, indexA, indexB) => {
        const temp = arrToSwap[indexA];
        arrToSwap[indexA] = arrToSwap[indexB];
        arrToSwap[indexB] = temp;
    }

    // Generating the permutations. 'n' are the initial elements of the collection
    const generate = (n, heapArr) => {
        if (n === 1) {
            output.push(heapArr.slice()); // The array is added to the output. slice() used to make a real copy of it
            return;
        } else {
            generate(n - 1, heapArr); // Recursive function

            for (let i = 0; i < n - 1; i++) {
                if (n % 2 === 0) { // If it is even we swap the indexes of the array
                    swapInPlace(heapArr, i, n - 1);
                } else {
                    swapInPlace(heapArr, 0, n - 1);
                }

                generate(n - 1, heapArr); // Recursion again
            }
        }
    }

    generate(arr.length, arr.slice()); // We don't want to manipulate the original array so with slice() we pass a real copy of it

    return output;
};

console.log(getPermutations([1, 2, 3, 4]));

