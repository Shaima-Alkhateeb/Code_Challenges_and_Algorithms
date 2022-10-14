// Write your test here

const { Node, BinaryTree } = require('./challenge03');

let tree = null;

describe('Challenge03 - Convert Sorted Array to Binary Search Tree', () => {
    it('should return null if the array is empty', () => {
        tree = new BinaryTree();
        expect(tree.sortedArrayToBST([])).toBeNull();
    });
    
    it('should return a root node if the array has one element', () => {
        tree = new BinaryTree();
        expect(tree.sortedArrayToBST([1])).toEqual({ value: 1, left: null, right: null });
    });
    
    it('should return a balanced binary search tree', () => {
        tree = new BinaryTree();
        expect(tree.sortedArrayToBST([-10, -3, 0, 5, 9])).toEqual({
        value: 0,
        left: { value: -3, left: { value: -10, left: null, right: null }, right: null },
        right: { value: 9, left: { value: 5, left: null, right: null }, right: null },
        });
    });

    // beforeAll( () => {
    //     let one = new Node(0);
    //     let two = new Node(-3);
    //     let three = new Node(9);
    //     let four = new Node(-10);
    //     let five = new Node(5);

    //     one.left = two;
    //     one.right = three;
    //     two.left = four;
    //     three.left = five;

    //     tree = new BinaryTree(one);
    // })

    // it('Create an empty tree', () => {
    //     tree = new BinaryTree();
    //     expect(tree).toBeDefined();
    // });

    // it('Test tree with a single root node', () => {
    //     tree = new BinaryTree(new Node(0));
    //     expect(tree.root.value).toEqual(0);
    // });

    // it('add a left and right child to a single root node', () => {
    //     tree = new BinaryTree(new Node(0));
    //     tree.root.left = new Node(-3);
    //     tree.root.right = new Node(9);
    //     tree.root.left.left = new Node(-10);
    //     tree.root.right.left = new Node(5);
    //     expect(tree.root.left.value).toEqual(-3);
    //     expect(tree.root.right.value).toEqual(9);
    //     expect(tree.root.left.left.value).toEqual(-10);
    //     expect(tree.root.right.left.value).toEqual(5);
    // });

})