// Write here the code challenge solution


class HashTable {
    constructor() {
        this.storage  = {};
    }

    set(key, value) {
        if ( !this.storage[ key ] )
         this.storage[ key ] = [ value ];
        this.storage[ key ] = [ ...this.storage[ key ], value ];
    }
}

function repeatedWord (string) {
    if (string === "" || !string.includes(' ')) return "No repeated words";
    let hashTable = new HashTable();
    let array = string.split(' ');
    for (let i = 0; i < array.length; i++) {
        if (hashTable.storage[array[i]]) return array[i];
        hashTable.set(array[i], array[i]);
    }
    return 'No repeated words';
}

module.exports = {HashTable, repeatedWord};
