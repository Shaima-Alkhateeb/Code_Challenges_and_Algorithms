// Write a function that takes a Binary Search tree and an integer as a parameter. Return True if Binary search tree has two elements that their summation is the given integer.

class Node {
    constructor(value, left = null , right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
}

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
}

class HashTable {
    constructor() {
        this.storage  = new Array();
    }

    set(key, value) {
        if ( !this.storage[ key ] )
         this.storage[ key ] = [ value ];
        this.storage[ key ] = [ ...this.storage[ key ], value ];
    }

    checkTheSum(tree, num) {
    tree.preOrder().forEach( ( value ) => {
        tree.preOrder().forEach( ( value2 ) => {
            if ( value !== value2 ) this.set( value, value2 );
        } );
    } );
    
    return this.storage
        .map( ( _value, idx ) =>
            this.storage[ idx ]?.find( ( value2 ) => idx + value2 === num && idx !== value2 )
        )
        .filter( ( value ) => value ).length ? true : false;
    }
}

module.exports = { Node, BinaryTree, HashTable };


// const findTarget = function(root, k) {
//     let current = root;
//     const sortedTree = inoderTree(current);
    
//     if (sortedTree.length === 1) return false;
  
//     for (let i = 0; i < sortedTree.length - 1; i++) {
//       for (let j = 1; j < sortedTree.length ; j++) {
//         if (i < j && sortedTree[i] + sortedTree[j] === k) return true;
//         if (i === sortedTree.length - 2 && j === sortedTree.length - 1) return false;
//       }
//     }
    
//     function inoderTree(current, acc = []) {
//       if (!current) return;
//       if (current.left) inoderTree(current.left, acc);
//       acc.push(current.val);
//       if (current.right) inoderTree(current.right, acc);
        
//       return acc;
//     }
// };
  


