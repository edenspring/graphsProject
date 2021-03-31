const { GraphNode } = require("./graph_node");

function breadthFirstSearch(startingNode, targetVal) {
    // if (!startingNode instanceof GraphNode) return null;
    let queue = [startingNode];
    let visited = new Set();

    while (queue.length) {
        let current = queue.shift();
        visited.add(current.val)
        if (current.val === targetVal) return current;
        let neighbors = current.neighbors;
        neighbors.forEach(neighbor => {
            if (!visited.has(neighbor.val)) {
                queue.push(neighbor);
            }
        })
    }
    return null;
}

module.exports = {
    breadthFirstSearch
};
