
const { Node, BinaryTree } = require('./challenge02');

let tree1 = null, tree2 = null;

describe('Challenge02 - Breadth First Traversal', () => {
    it('return true if the two trees are equal ', () => {
        tree1 = new BinaryTree();
        tree2 = new BinaryTree();
        tree1.root = new Node(1);
        tree1.root.left = new Node(2);
        tree1.root.right = new Node(3);
        tree2.root = new Node(1);
        tree2.root.left = new Node(2);
        tree2.root.right = new Node(3);
        expect(tree1.breadthFirst(tree1.root, tree2.root)).toBeTruthy();
    });

    it('return false if the two trees are not equal ', () => {
        tree1 = new BinaryTree();
        tree2 = new BinaryTree();
        tree1.root = new Node(1);
        tree1.root.left = new Node(2);
        tree1.root.right = new Node(3);
        tree2.root = new Node(1);
        tree2.root.left = new Node(2);
        tree2.root.right = new Node(3);
        tree2.root.left.left = new Node(4);
        expect(tree1.breadthFirst(tree1.root, tree2.root)).toBeFalsy();
    });
        
});