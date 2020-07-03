#  LINKED LISTS

Linked Lists are like arrays but instead of having like a large box of small boxes (elements) each element is linked with like a string to the other element. A linked list can easily insert or remove elements without reallocation or reorganization of the entire structure because the data items need not be stored contiguously. The linked list data structure is often used to implement other data structures.

LinkedLists are not usually used in Javascript, they are mostly use in C/C++. While they are generally faster for adding and remvoing items, in JS arrays (ans Sets) are highly optimised so you can stick with them as faster choices.

Each Node/Box has a Data and a 'next' field referring to the next Node/Box. Every item can refer to the right one but not the other way around. It's a one way direction. (This does not apply if you use a Doubly Linked List)



## DIFFERENCE WITH ARRAYS 
As opposite as Arrays, Linked Lists do not let you return an elements as xyz[3]; The search process is sequential.


## ADVANTAGES / DISADVANTAGES 

**Advantages:**
- Adding and deleting elements is much faster than with arrays because there is no need for reallocation or reorganization of the entire structure. The data items need not be stored contiguously.
- Not restricted to a fixed number of elements

**Disadvantages:**
- Slow to get nth element
- Random access not allowed. Nodes must be accessed sequentially. We cannot do a binary search for example
- Extra memory space for a link is required for each element of the list.



**Note:** there is another version of the Linked List called the Doubly Linked List and this one also stores the location of the previous element so it does not only go left to right.



## Reference: 
- https://medium.com/javascript-in-plain-english/implementing-a-linked-list-in-javascript-3f71c83487b5