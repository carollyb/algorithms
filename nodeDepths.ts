/* 
The distance between a node in a Binary Tree and the tree's root is called the
node's depth. 
  Write a function that takes in a Binary Tree and returns the sum of its nodes'
  depths. Each BinaryTree  node has an integer value, a left child node, and a right  child node. Children
  nodes can either be BinaryTree nodes themselves or None / null*/
// Average case: when the tree is balanced
// O(n) time | O(h) space - where n is the number of nodes in
// the Binary Tree and h is the height of the Binary Tree
export function nodeDepths(root: BinaryTree | null, depth = 0): number {
  if (root === null) return 0;
  return (
    depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
  );
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
