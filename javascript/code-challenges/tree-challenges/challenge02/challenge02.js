
// create a node class that have a value and left and right properties
class Node {
    constructor(value, left = null , right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
}

// create a binary tree class that have a root property, and breadthFirst methods
class BinaryTree {
    constructor(root = null) {
      this.root = root;
    }

    breadthFirst( p, q ) {
        // both trees are empty 
        if (p === null && q === null) {
            return true;
        }
        // both trees are not empty then compare them
        if (p !== null && q !== null) {
            return (p.value === q.value) 
            && this.breadthFirst(p.left, q.left) 
            && this.breadthFirst(p.right, q.right);
        }
        // one of the trees is empty
        return false;
    }
}

module.exports = { Node, BinaryTree };