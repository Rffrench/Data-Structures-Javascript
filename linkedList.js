/*
Linked Lists are like arrays but instead of having like a large box of small boxes (elements) each element is linked with like a string to the other element.

Each Node/Box has a Data and a Next field referring to the next Node/Box. Every item can refer to the right one but not the other way around. It's a one way direction.

head >> current Node
head.data >> Data of the current Node
head.next >> next Node
head.next.data >> data of the next Node



**Java syntax**
class Node {
    int data;
    Node next; // null by default

    //constructor
    Node(int data){
        this.data = data;
    }
}

// Creating Nodes
Node nodeA = new Node(6); //null next value
Node nodeB = new Node(3);
Node nodeC = new Node(4);
Node nodeD = new Node(2);
Node nodeE = new Node(1);

// Linking Nodes
nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
nodeD.next = nodeE;



***The above code is just an example of a simplify version of Linked Lists but it is not a convenient way of creating one. A class called LinkedList that holds all the values and functions is the correct approach***

class LinkedList{

}

*/

