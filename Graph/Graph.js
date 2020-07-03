// GRAPHS

/*
Simply put, a graph is a collection of nodes with edges between them. If a node n1 is connected to another node n2 with an edge, we say n1 is adjacent to n2.

Nodes are called VERTICES and the connections between these vertexes are called EDGES. Edges have 2 endpoints and there can be DIRECTED EDGES (edges that have a one way connection) or UNDIRECTED EDGES (edges that have a two way connection)

Graphs can directed or undirected or a mix (not common):
- Directed graphs have directed edges like Trees and one vertex is called origin while the other is the destination
- Undirected graphs have undirected edges

Graphs can have self-loops and multiple-edges. If they don't have that then they are called simple graphs

Graphs are used a lot in many systems like a Social Network. Facebook for example probably uses graphs to represent the friends and friends in common. Facebook friends would be an example of an Undirected Graph, if you are my friend I am your friend too so its a two way connection
The web interlinks could be an example of a mixed graph. Each page can have links to other pages by it could be vice versa or not. SO there we would have some directed edges and some other undirected edges depending on the website



A graph is called connected if there is a path between any pair of nodes, otherwise it is called disconnected. If it is disconnected it means that it contains some sort of isolated nodes.

In an interview, you should clarify if the graph will be connected or not, before you start coding. If the graph is an unknown input, you should ask your interviewer whether you can assume connectivity or not.
This also shows your understanding of the topic and the caveats that arise with disconnected graphs



*** ADJACENCY MATRIX vs ADJACENCY LIST ***

There are two classic programmatic representations of a graph: adjacency lists and adjacency matrices.
Both allow the application of the same algorithms, but they differ in performance



- Adjacency Matrix:
An adjacency matrix is a matrix where both dimensions equal the number of nodes in our graph and each cell can either have the value 0 or 1. If the cell at row i and column j has the value 1, it means that node i is adjacent to node j.
An adjacency matrix in JavaScript is simply a two-dimensional array with boolean values

Let n be the number of nodes and e be the number of edges of the graph:
    It consumes O(n²) space
    You can check if node i is adjacent to node j in O(1) steps.
    Getting all adjacent nodes to node i takes O(n) steps

Example:
const adjacencyMatrix = [
  [false, true, true, false],
  [false, false, true, true],
  [false, false, false, false],
  [false, false, true, false],
];



- Adjacency List:
An adjacency list represents the graph in a different way. Every node has a list of adjacent nodes
Such an adjacency list is best implemented using a hash-map of hash-sets

Let again n be the number of nodes and e be the number of edges of the graph:
    It consumes O(n+e) space.
    You can check if node i is adjacent to node j in O(n) (but it is also possible in O(1) depending on the implementation)
    Getting all nodes adjacent to node i takes O(1) steps.

Example:
const adjacencyList = new Map();
adjacencyList.set(1, new Set([2,3]));
adjacencyList.set(2, new Set([3,4]));
adjacencyList.set(3, new Set());
adjacencyList.set(4, new Set([3]));

By using a hash-set instead of a list, we can check for existence of an entry in O(1) instead of O(n)

Which one to use ????
Since the adjacency list performs better in most cases and does not increase complexity, I don’t see a reason for using a matrix


*** BFS vs DFS ***
(check medium link of references for graphical images)

BFS (breadth-first search) and DFS (depth-first search) are two simple algorithms that form the basis for many advanced graph algorithms. They can be used to completely explore a graph. If you just want to explore all nodes and the order does not play a role then you can choose either algorithm. However, if the order of exploration is important then you should choose wisely

While they both explore every node in the graph exactly once, they differ in their order of exploration. For a coding interview, you should definitely be able to code them up from scratch and also know about the differences between them.


- Depth First Search
DFS explores the graph from a start node s. From that node on, it will recursively explore each neighbor. That means that the neighbors of neighbor 1 will be explored before neighbor 2. It first explores the graph in depth and then in breadth


- Breadth First Search
BFS also explores the graph from a start node s. From that node on, it will explore each neighbor before it goes on to a neighbor’s neighbor. The graph is first explored in breadth and then in depth




Reference:
https://www.youtube.com/watch?v=gXgEDyodOJU
https://medium.com/better-programming/basic-interview-data-structures-in-javascript-graphs-3f9118aeb078
*/

// JAVASCRIPT SYNTAX

// We use adjancent lists here

class Graph {
    constructor() {
        this.vertexes = [];
        this.edges = [];
        this.numberOfEdges = 0;
    }

    // Adding a new Node/Vertex
    addVertex(vertex) {
        this.vertexes.push(vertex);

        this.edges[vertex] = []; // Array inside array in the vertex index
    }

    // Removes vertex by looking the index first
    removeVertex(vertex) {
        const index = this.vertexes.indexOf(vertex); // It will return -1 if it doesn't find it so we check below

        if (index >= 0) {
            this.vertexes.splice(index, 1); // Deletes 1 element at the index
        }

        while (this.edges[vertex].length) { // Check if there are edges for that particular vertex

            const adjacentVertex = this.edges[vertex].pop() // Getting the adjacent element of the vertex 

            this.removeEdge(adjacentVertex, vertex); // Removing the edges
        }

    }

    // Adding edges between 2 vertexes
    addEdge(vertex1, vertex2) {
        this.edges[vertex1].push(vertex2); // Adding edge 
        this.edges[vertex2].push(vertex1); // Same but for the other vertex
        this.numberOfEdges++;
    }

    // Removing edges between 2 vertexes
    removeEdge(vertex1, vertex2) {
        const index1 = this.edges[vertex1] ? this.edges[vertex1].indexOf(vertex2) : -1; // If the edges exist we get the index of vertex 2 and then we do the opposite below
        const index2 = this.edges[vertex2] ? this.edges[vertex2].indexOf(vertex1) : -1;

        if (index1 >= 0) { // Checking if the edge is in the array (or it would return -1)
            this.edges[vertex1].splice(index1, 1);
            this.numberOfEdges--;
        }

        if (index2 >= 0) {
            this.edges[vertex2].splice(index2, 1);
        }


    }

    // Getting the number of vertexes
    size() {
        return this.vertexes.length;
    }

    // Number of edges
    relations() {
        return this.numberOfEdges; // This is why we have this property, instead of iterating over edges[] we just store the number which we decrement or increase
    }

    // Printing all the vertexes
    print() {
        console.log(this.vertexes.map(vertex => {
            return `${vertex} => ${this.edges[vertex].join(', ').trim()}` // We combine all the vertexes of the array with a comma. This syntax because of the String interpolation, we are mixing variables with strings
        }, this).join(' | ')); // 'this' needed because we are using the map function so to refer the class we use it
    }
}



// Testing function
(function test() {
    let graph = new Graph();


    graph.addVertex('Node1');
    graph.addVertex('Node2');
    graph.addVertex('Node3');
    graph.addVertex('Node4');
    graph.addVertex('Node5');

    graph.addEdge('Node1', 'Node2');
    graph.addEdge('Node1', 'Node3');
    graph.addEdge('Node2', 'Node4');
    graph.addEdge('Node3', 'Node5');

    graph.removeVertex('Node4');
    graph.removeEdge('Node1', 'Node2');

    console.log(graph.size());
    console.log(graph.relations());

    graph.print();
})()
