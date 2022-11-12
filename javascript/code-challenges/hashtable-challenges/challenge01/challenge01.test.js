// Write your test here

const { Node, BinaryTree, HashTable } = require('./challenge01.js');

describe('Testing challenge 01: Two Sum BST', () => {
    beforeAll( () => {
        let one = new Node(7);
        let two = new Node(2);
        let three = new Node(9);
        let four = new Node(1);
        let five = new Node(5);
        let six = new Node(14);
    
        one.left = two;
        one.right = three;
        two.left = four;
        two.right = five;
        three.right = six;
    
        tree = new BinaryTree(one);
    })
    
    it('should return true if there is a pair of numbers that add up to the sum', () => {
        const hashTable = new HashTable();
        expect(hashTable.checkTheSum(tree, 3)).toBeTruthy();
    })
    
    it('should return false if there is no pair of numbers that add up to the sum', () => {
        const hashTable = new HashTable();
        expect(hashTable.checkTheSum(tree, 28)).toBeFalsy();
    })


    
    // it('It should return true if two numbers in the BST add up to the target', () => {
    //     const tree = new BinaryTree();
    //     tree.root = new Node(5);
    //     tree.root.left = new Node(3);
    //     tree.root.right = new Node(6);
    //     tree.root.left.left = new Node(2);
    //     tree.root.left.right = new Node(4);
    //     tree.root.right.right = new Node(7);
    
    //     const hashTable = new HashTable();
    //     expect(hashTable.checkTheSum(tree, 9)).toBeTruthy();
    // });

    // it('It should return false if no two numbers in the BST add up to the target', () => {
    //     const tree = new BinaryTree();
    //     tree.root = new Node(5);
    //     tree.root.left = new Node(3);
    //     tree.root.right = new Node(6);
    //     tree.root.left.left = new Node(2);
    //     tree.root.left.right = new Node(4);
    //     tree.root.right.right = new Node(7);
    
    //     const hashTable = new HashTable();
    //     expect(hashTable.checkTheSum(tree, 28)).toBeFalsy();
    // })



});

