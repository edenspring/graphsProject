const { GraphNode } = require('../lib/graph_node')

function maxValue(node, visited=new Set()) {
    let stack = [node]
    let maxVal = 0
    while (stack.length) {
        let current = stack.pop();
        visited.add(current.val);
        let neighbors = current.neighbors
        if (current.val >= maxVal) {
            maxVal = current.val;
        }
        neighbors.forEach(neighbor => {
            if (!visited.has(neighbor.val)) {
                stack.push(neighbor);
            }
        })
    }
    return maxVal;
}


module.exports = {
    maxValue
};
