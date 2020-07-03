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