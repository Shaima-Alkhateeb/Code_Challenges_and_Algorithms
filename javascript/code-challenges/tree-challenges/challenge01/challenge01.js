// Write here the code challenge solution

// create a node class that have a value and left and right properties
class Node {
  constructor(value, left = null , right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// create a binary tree class that have a root property, and methods for preOrder, inOrder
class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    // Root -> Left -> Right
    preOrder() {
        let results = [];
        let _traverse = (node) => {
            results.push(node.value);
            if (node.left) _traverse(node.left);
            if (node.right) _traverse(node.right);
        }
        _traverse(this.root);
        return results;
    }

    // Left -> Root -> Right
    inOrder() {
        let results = [];
        let _traverse = (node) => {
            if (node.left) _traverse(node.left);
            results.push(node.value);
            if (node.right) _traverse(node.right);
        }
        _traverse(this.root);
        return results;
    }

}

module.exports = { Node, BinaryTree };























// const buildTree = (preorder, inorder) => {
//     let M = new Map()
//     for (let i = 0; i < inorder.length; i++)
//         M.set(inorder[i], i)
//     return splitTree(preorder, M, 0, 0, inorder.length-1)
// };

// const splitTree = (preorder, M, pix, ileft, iright) => {
//     let rval = preorder[pix],
//         root = new TreeNode(rval),
//         imid = M.get(rval)
//     if (imid > ileft)
//         root.left = splitTree(preorder, M, pix+1, ileft, imid-1)
//     if (imid < iright)
//         root.right = splitTree(preorder, M, pix+imid-ileft+1, imid+1, iright)
//     return root
// }