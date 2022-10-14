// Write here the code challenge solution

// create a node class that have a value and left and right properties
class Node {
    constructor(value, left = null , right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
}

    // create a binary tree class that have a root property, and methods for height-balance binary search tree
class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    // create a method to convert the sorted array to a binary search tree
    sortedArrayToBST(arr) {
        // if the array is empty, return null
        if (arr.length === 0) {
            return null;
        }
        // find the middle index of the array
        let mid = Math.floor(arr.length / 2);
        // create a root node with the middle value of the array
        let root = new Node(arr[mid]);
        // create a left subtree with the left part of the array
        root.left = this.sortedArrayToBST(arr.slice(0, mid));
        // create a right subtree with the right part of the array
        root.right = this.sortedArrayToBST(arr.slice(mid + 1));
        // return the root node
        return root;
    }
}

module.exports = { Node, BinaryTree };

