# GRAPHS


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



## ADJACENCY MATRIX vs ADJACENCY LIST

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


## BFS vs DFS
(check medium link of references for graphical images)

BFS (breadth-first search) and DFS (depth-first search) are two simple algorithms that form the basis for many advanced graph algorithms. They can be used to completely explore a graph. If you just want to explore all nodes and the order does not play a role then you can choose either algorithm. However, if the order of exploration is important then you should choose wisely

While they both explore every node in the graph exactly once, they differ in their order of exploration. For a coding interview, you should definitely be able to code them up from scratch and also know about the differences between them.


- Depth First Search
DFS explores the graph from a start node s. From that node on, it will recursively explore each neighbor. That means that the neighbors of neighbor 1 will be explored before neighbor 2. It first explores the graph in depth and then in breadth


- Breadth First Search
BFS also explores the graph from a start node s. From that node on, it will explore each neighbor before it goes on to a neighbor’s neighbor. The graph is first explored in breadth and then in depth




## Reference:
https://www.youtube.com/watch?v=gXgEDyodOJU
https://medium.com/better-programming/basic-interview-data-structures-in-javascript-graphs-3f9118aeb078
*/