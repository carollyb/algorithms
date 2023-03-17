/* Write a function that takes in a Binary Tree and returns a list of its branch
sums ordered from leftmost branch sum to rightmost branch sum.
A branch sum is the sum of all values in a Binary Tree branch. A binary tree branch
is a path of nodes in a tree that starts at the root node and ends at any leaf node.
Each BinaryTree node has an integer value, a left child node, and a right child node.
Children nodes can either be BinaryTree nodes themselves or None / null*/
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

export function branchSums(root: BinaryTree): number[] {
  const sums: number[] = [];
  calculateBranchSums(root, 0, sums);
  return sums;
}

function calculateBranchSums(
  node: BinaryTree | null,
  runningSum: number,
  sums: number[]
) {
  if (!node) return;
  const newRunningSum = runningSum + node.value;
  if (!node.left && !node.right) {
    sums.push(newRunningSum);
    return;
  }
  calculateBranchSums(node.left, newRunningSum, sums);
  calculateBranchSums(node.right, newRunningSum, sums);
}

//O(n) time | O(n) space - where n is the number of nodes in the Binary Tree
