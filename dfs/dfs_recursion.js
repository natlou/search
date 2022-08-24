const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");
// list of airports 

// list of routes connecting the airports 
const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'BKK'],
    ['MEX', 'LAX'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
]

// adjacency matrix is easier to represent 
// however, since there are not that many routes relative 
// to possible combinations, it's a waste of space complexity 
// our matrix will be very sparse (a lot of 0s) 
// takes too much time to iterate through 

// The graph 
// map is usually better than an Object in javascript 
const adjacencyList = new Map(); 

// Add a node 
function addNode(airport) {
    adjacencyList.set(airport, []);
}

// add edge, undirected 
function addEdge(origin, destination) {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}

// Create the graph
airports.forEach( (route) => addNode(route) );  // add vertices
routes.forEach( (route) => addEdge(route[0], route[1]) ) // add Edges

console.log(adjacencyList);


function dfs(root, visited = new Set()) {

    console.log(root);

    visited.add(root); 

    const destinations = adjacencyList.get(root); 

    for (const destination of destinations) {

        if (destination === 'BKK') {
            console.log(`DFS found BKK in ${root}`);
            return; 
        }

        // this function will push the destination to the top of the call stack 
        if (!visited.has(destination)) {
            dfs(destination, visited)
        }
    }
}