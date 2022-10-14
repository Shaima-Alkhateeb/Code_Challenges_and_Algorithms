// Write your test here

const { Node, BinaryTree } = require('./challenge01');

let tree = null;

describe('Challenge01 - Construct BT from Preorder & Inorder', () => {
    beforeAll( () => {
        let one = new Node(3);
        let two = new Node(9);
        let three = new Node(20);
        let four = new Node(15);
        let five = new Node(7);

        one.left = two;
        one.right = three;
        three.left = four;
        three.right = five;

        tree = new BinaryTree(one);
    })

    it('Create an empty tree', () => {
        tree = new BinaryTree();
        expect(tree).toBeDefined();
    });
    
    it('Test tree with a single root node', () => {
        tree = new BinaryTree(new Node(3));
        expect(tree.root.value).toEqual(3);
    });
    
    it('add a left and right child to a single root node', () => {
        tree = new BinaryTree(new Node(3));
        tree.root.left = new Node(9);
        tree.root.right = new Node(20);
        tree.root.right.left = new Node(15);
        tree.root.right.right = new Node(7);
        expect(tree.root.left.value).toEqual(9);
        expect(tree.root.right.value).toEqual(20);
        expect(tree.root.right.left.value).toEqual(15);
        expect(tree.root.right.right.value).toEqual(7);
    });
    
    it('Testing preorder traversal', () => {
        const tree = new BinaryTree(new Node(3));
        tree.root.left = new Node(9);
        tree.root.right = new Node(20);
        tree.root.right.left = new Node(15);
        tree.root.right.right = new Node(7);
        expect(tree.preOrder()).toEqual([3, 9, 20, 15, 7]);
    });
    
    it('Testing inorder traversal', () => {
        const tree = new BinaryTree(new Node(3));
        tree.root.left = new Node(9);
        tree.root.right = new Node(20);
        tree.root.right.left = new Node(15);
        tree.root.right.right = new Node(7);
        expect(tree.inOrder()).toEqual([9, 3, 15, 20, 7]);
    });

});