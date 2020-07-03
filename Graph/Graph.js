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
