class Graph {
  constructor() {
    // Code goes here ...
    this.adjList = new Object();
    // this.neighbor = []
  }

  addVertex(vertex) {
    // Code goes here ...
    if (this.adjList[vertex]) return;
    this.adjList[vertex] = [];
  }

  addEdges(srcValue, destValue) {
    // Code goes here ...
    if (!this.adjList[srcValue]) this.addVertex(srcValue);
    if (!this.adjList[destValue]) this.addVertex(destValue);

    const srcVertex = this.adjList[srcValue];
    const destVertex = this.adjList[destValue];

    srcVertex.push(destValue);
    destVertex.push(srcValue);
  }

  buildGraph(edges) {
    // Code goes here ...
    edges.forEach((edge) => {
      let [src, dest] = edge;
      this.addEdges(src, dest);
    });

    return this.adjList;
  }

  breadthFirstTraversal(startingVertex) {
    // Code goes here ...
    const verified = [];
    const queue = [startingVertex];
    while (queue.length) {
      let current = queue.shift();
      if (!verified.includes(current)) {
        verified.push(current);
      }
      let neighbors = this.adjList[current];
      neighbors.forEach((neighbor) => {
        if (!verified.includes(neighbor)) {
          queue.push(neighbor);
        }
      });
    }
    return verified;
  }

  depthFirstTraversalIterative(startingVertex) {
    // Code goes here ...
    const verified = [];
    const stack = [startingVertex];

    while (stack.length) {
      let current = stack.pop();

      if (!verified.includes(current)) {
        verified.push(current);
      }

      let neighbors = this.adjList[current];

      neighbors.forEach((neighbor) => {
        if (!verified.includes(neighbor)) {
          stack.push(neighbor);
        }
      });
    }
    return verified;
  }

  depthFirstTraversalRecursive(startingVertex, visited = new Set(), vertices = []) {
    // Code goes here ...
    if (visited.has(startingVertex)) return;

    visited.add(startingVertex);
    vertices.push(startingVertex);
    let neighbors = this.adjList[startingVertex];
    neighbors.forEach((neighbor) =>
      this.depthFirstTraversalRecursive(neighbor, visited, vertices)
    );
    return vertices;
  }
}

module.exports = {
  Graph,
};
