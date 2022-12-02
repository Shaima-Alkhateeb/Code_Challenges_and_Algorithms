// Write your test here
'use strict';

const Graph = require('./challenge01.js')

describe('Testing challenge 01: Breadth First -Graph-', () => {
  it('should traverse the graph', () => {
    let myGraph = new Graph();

    myGraph.addVertex('A');
    myGraph.addVertex('B');
    myGraph.addVertex('C');
    myGraph.addVertex('D');
    myGraph.addVertex('E');
    myGraph.addVertex('F');
    myGraph.addVertex('G');
    myGraph.addVertex('H');
    myGraph.addVertex('I');
    myGraph.addVertex('K');

    myGraph.addEdge('A', 'C');
    myGraph.addEdge('A', 'E');
    myGraph.addEdge('A', 'B');

    myGraph.addEdge('C', 'F');
    myGraph.addEdge('E', 'G');
    myGraph.addEdge('B', 'D');

    myGraph.addEdge('E', 'D');
    myGraph.addEdge('E', 'F');

    myGraph.addEdge('F', 'I');
    myGraph.addEdge('F', 'H');
    myGraph.addEdge('G', 'H');

    myGraph.addEdge('I', 'K');
    myGraph.addEdge('H', 'K');

    expect(myGraph.breadthFirst('A')).toEqual(['A', 'C', 'E', 'B', 'F', 'G', 'D', 'I', 'H', 'K']);
  });
});