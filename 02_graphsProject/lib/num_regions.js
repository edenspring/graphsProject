function numRegions(graph) {
    let regions = [];
    let bigSet = new Set();

    for (key in graph) {
        let neighbors = graph[key];
        let current = [key];
        let currentSet = new Set(key);
        neighbors.forEach(neighbor => {
            if (!currentSet.has(neighbor)) {
                currentSet.add(neighbor);
            }
        })
        if (!bigSet.has(currentSet)) {
            bigSet.add(currentSet);

        }
    }
    return bigSet.size;
}

module.exports = {
    numRegions
};
