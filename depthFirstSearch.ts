/* You're given a Node that has a name and an array of optional children nodes. When put
together, nodes form an acyclic tree-like structure.
Implement the depthFirstSearch method on the Node class, which takes in an
empty array, traverses the tree using the Depth-first Search approach (specifically
navigating the tree from left to right), stores all of the nodes' names in the input
array, and returns it.

Hint 1:
The depth-first search algorithm works by traversing a graph brach by branch. In other
words, before traversing any Node's sibling Nodes, its children nodes must be traversed.
How can you simply and effectively keep track of Node's sibling Nodes as you traverse them,
all the while retaining the order in which you must traverse them?

Optimal space and time complexity
O(v+e) time | O(v) space; where V is the number of vertices of the input graph and e is the
number of edges of the input graph
 */
// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
export class Node {
  name: string;
  children: Node[];

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }

  addChild(name: string) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array: string[]) {
    array.push(this.name);
    for (const child of this.children) {
      child.depthFirstSearch(array);
    }
    return array;
  }
}
