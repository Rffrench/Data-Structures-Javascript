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

- Heaps are usually used for Heap Sort, an efficient sorting algorithm which is very popular! They are a partially ordered binary tree. Each Node can allocate 2 child nodes. Heaps are usually stored as arrays with no index 0

- Max Heap = children are less than the parent node
- Min Heap = children are greater than the parent node


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




Reference:
https://www.guru99.com/stack-vs-heap.html
https://stackoverflow.com/questions/79923/what-and-where-are-the-stack-and-heap?rq=1
https://www.youtube.com/watch?v=dM_JHpfFITs
 */



// JAVASCRIPT SYNTAX


// left child: i * 2
// right child: i * 2 + 1
// parent: i / 2


// MIN HEAP
let MinHeap = function () {

    let heap = [null];

    this.insert = function (num) {
        heap.push(sum); // An item is added to the heap
        if (heap.length > 2) { // If there are more than 2 nodes we check if the values need to be swapped
            let idx = heap.length - 1;
            while (heap[idx] < heap[Math.floor(idx / 2)]) { // If the last item of the array is less than its parent we need to move it up. This will keep going until the node is in the correct position i.e smaller than the parent node
                if (idx >= 1) { // If we reach the root node
                    [heap[Math.floor(idx / 2)], heap[idx]] = [heap[idx], heap[Math.floor(idx / 2)]]; // ES6 Destructing syntax. We switch the node we have just inserted with the parent node
                    if (Math.floor(idx / 2) > 1) { // If the parent node is not the root node
                        idx = Math.floor(idx / 2); // Index will be the node now
                    } else {
                        break;
                    }
                }
            }
        }
    }
    this.remove = function () { // We always remove the top node in this case the smallest node
        let smallest = heap[1];
        if (heap.length > 2) { // Check if the are more than 2 nodes in the tree
            heap[1] = heap[heap.length - 1]; // We set the first node of the tree to the last node
            heap.slice(heap.length - 1); // We shorten the array by 1
            if (heap.length == 3) {
                if (heap[1] > heap[2]) { // If the first one is bigger than the second one we switch them
                    [heap[1], heap[2]] = [heap[2], heap[1]]; // We switch the nodes
                }
                return smallest;
            }
            // Now if there are more than 2 nodes in the array
            let i = 1;
            let left = 2 * i;
            let right = 2 * i + 1;
            while (heap[i] >= heap[left] || heap[i] >= heap[right]) { // Here we keep moving down a node
                if (heap[left] < heap[right]) {
                    [heap[i], heap[left]] = [heap[left], heap[i]];
                    i = 2 * 1; // We set the index to be the node that was at the top node and that has been swapped
                } else {
                    [heap[i], heap[right]] = [heap[right], heap[i]];
                    i = 2 * i + 1;
                }
                left = 2 * i;
                right = 2 * i + 1;
                if (heap[left] == undefined && heap[right] == undefined) {
                    break;
                }
            }
        } else if (heap.length == 2) {
            heap.splice(1, 1);
        } else {
            return null;
        }
        return smallest;
    }

    // Heap sort
    this.sort = function () {
        let result = [];
        while (heap.length > 1) {
            result.push(this.remove());
        }
        return result;
    }
}




// MAX HEAP
let MaxHeap = function () {

    let heap = [null];

    this.print = () => heap;

    this.insert = function (num) {
        heap.push(num);
        if (heap.length > 2) {
            let idx = heap.length - 1;
            while (heap[idx] > heap[Math.floor(idx / 2)]) {
                if (idx >= 1) {
                    [heap[Math.floor(idx / 2)], heap[idx]] = [heap[idx], heap[Math.floor(idx / 2)]];
                    if (Math.floor(idx / 2) > 1) {
                        idx = Math.floor(idx / 2);
                    } else {
                        break;
                    };
                };
            };
        };
    };

    this.remove = function () {
        let smallest = heap[1];
        if (heap.length > 2) {
            heap[1] = heap[heap.length - 1];
            heap.splice(heap.length - 1);
            if (heap.length == 3) {
                if (heap[1] < heap[2]) {
                    [heap[1], heap[2]] = [heap[2], heap[1]];
                };
                return smallest;
            };
            let i = 1;
            let left = 2 * i;
            let right = 2 * i + 1;
            while (heap[i] <= heap[left] || heap[i] <= heap[right]) {
                if (heap[left] > heap[right]) {
                    [heap[i], heap[left]] = [heap[left], heap[i]];
                    i = 2 * i
                } else {
                    [heap[i], heap[right]] = [heap[right], heap[i]];
                    i = 2 * i + 1;
                };
                left = 2 * i;
                right = 2 * i + 1;
                if (heap[left] == undefined && heap[right] == undefined) {
                    break;
                };
            };
        } else if (heap.length == 2) {
            heap.splice(1, 1);
        } else {
            return null;
        };
        return smallest;
    };

};