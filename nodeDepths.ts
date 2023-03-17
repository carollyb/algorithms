/* The distance between a node in a Binary Tree and the tree's root is
called the node's depth.
Write a function that takes in a Binary Tree and returns the sum of its
node's depths.
Each Binary Tree node has an integer value, a left child node, and a right
child node. Children nodes can either be BinaryTree node themselves or None/null */
export function nodeDepths(root: BinaryTree) {
  let sumOfDepths = 0;
  const stack: { node: BinaryTree | null; depth: number }[] = [
    { node: root, depth: 0 },
  ];
  while (stack.length > 0) {
    const { node, depth } = stack.pop()!;
    if (node === null) continue;
  }
}

// This is the class of the input binary tree.
class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
