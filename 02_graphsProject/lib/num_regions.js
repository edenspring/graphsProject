function numRegions(graph) {
    // let regions = [];
    // let bigSet = new Set();

    // for (key in graph) {
    //     let neighbors = graph[key];
    //     let current = [key];
    //     let currentSet = new Set(key);
    //     neighbors.forEach(neighbor => {
    //         if (!currentSet.has(neighbor)) {
    //             currentSet.add(neighbor);
    //         }
    //     })
    //     if (!bigSet.has(currentSet)) {
    //         bigSet.add(currentSet);

    //     }
    // }
    // return bigSet.size;

    let counter = 0;
    let visited = new Set();

    for (key in graph) {
        if (!visited.has(key)) {
            counter++
            visited.add(key)
        }
        let neighbors = graph[key];
        neighbors.forEach(neighbor => {
            visited.add(neighbor)
        })
    }
    return counter
}

module.exports = {
    numRegions
};
