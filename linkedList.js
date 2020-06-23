/*  LINKED LISTS

Linked Lists are like arrays but instead of having like a large box of small boxes (elements) each element is linked with like a string to the other element.

Each Node/Box has a Data and a Next field referring to the next Node/Box. Every item can refer to the right one but not the other way around. It's a one way direction.

***DIFFERENCE WITH ARRAYS***
As opposite as Arrays, Linked Lists do not let you return an elements as xyz[3]; They search linearly.

Advantages:
- Adding and deleting elements is much faster than with arrays

Disadvantages:
- Slow to get nth element


*Note: there is another version of the Linked List called the Doubly Linked List and this one stores the location of the previous element so it does not only go left to right.



head >> current Node
head.data >> Data of the current Node
head.next >> next Node
head.next.data >> data of the next Node



**Java syntax for Nodes of a linked list**
class Node {
    int data;
    Node next; // null by default

    //constructor
    Node(int data){
        this.data = data;
    }
}

// Creating Nodes
Node head = new Node(6); >> Head is the first element. Null next value by default
Node nodeB = new Node(3);
Node nodeC = new Node(4);
Node nodeD = new Node(2);
Node nodeE = new Node(1);

// Linking Nodes
head.next = nodeB;  >> Head is the first element
nodeB.next = nodeC;
nodeC.next = nodeD;
nodeD.next = nodeE;



***The above code is just an example of a simplify version of Linked Lists but it is not a convenient way of creating one. A class called LinkedList that holds all the values and functions is the correct approach***


// Get the number of Nodes
static int countNodes(Node head){
    int count = 1;
    Node current = head;
    while(current.next != null){
        current = current.next;
        count+=1;
    }
    return count;
}

*/

