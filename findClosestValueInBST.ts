/* Write a function that takes in a Binary Search Tree annd a target integer
value and returns the closest value to that target value contained in the BST
You can assume that there will only be one closest value.
Each BST node has an integer value, a left child node, and a right child node.
A node is said to be a valid BST node if and only if satisfies the BST property:
its value is strictly greater than the values of every node to its left; its
value is less than or equal to the values of every node to its right; and its
children nodes are either valid BST nodes themselves or None/null */

//recursive solution -> average: O(log(n) time | O(log(n) space); worst: O(n) time | O(n) space)
class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function findClosestValueInBst(tree: BST, target: number) {
  return findClosestValueInBstHelper(tree, target, tree.value);
}

function findClosestValueInBstHelper(
  tree: BST | null,
  target: number,
  closest: number
): number {
  if (tree === null) return closest;
  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }
  if (target < tree.value) {
    return findClosestValueInBstHelper(tree.left, target, closest);
  } else if (target > tree.value) {
    return findClosestValueInBstHelper(tree.right, target, closest);
  } else {
    return closest;
  }
}

//iterative solution -> average: O(log(n)) time | O(1) space; worst: O(n) time | O(1) space

export function findClosestValueInBst1(tree: BST, target: number) {
  return findClosestValueInBstHelper1(tree, target, tree.value);
}

function findClosestValueInBstHelper1(
  tree: BST | null,
  target: number,
  closest: number
) {
  let currentNode = tree;
  while (currentNode !== null) {
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value;
    }
    if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else {
      break;
    }
  }
  return closest;
}
