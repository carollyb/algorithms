/* Note that this array is an adjacent list, and it represents a graph.
 The number of vertices in the graph is equal to the length of edges, 
 where each index i in edges contains vertex i's outbound edges, 
 in no particular order. Each individual edge is represented by a pair of 
 two numbers, [destination, distance], where te destination is a positive 
 integer denoting the destination vertex and the distance is a positive 
 integer representing the length of the edge (the distance from vertex 
  i to vertex destination). Note that these edges are directed, meaning 
  that you can only travel from a particular vertex to its destination - 
  not the other way around (unless the destination vertex itself has an 
  outbound edge to the original vertex). */
export function dijkstrasAlgorithm(start: number, edges: number[][][]) {
  let numberOfVertices = edges.length;
  let minDistances = new Array(numberOfVertices).fill(Infinity);
  minDistances[start] = 0;
  let visited = new Set<number>();

  while (visited.size !== numberOfVertices) {
    let [vertex, currentMinDistance] = getVertexWithMinDistance(
      minDistances,
      visited
    );
    if (currentMinDistance === Infinity) {
      break;
    }

    visited.add(vertex);
    for (const edge of edges[vertex]) {
      let [destination, distance] = edge;
      //desestrutura os edges. se o vertice de destino estiver em visitado, continua o loop
      if (visited.has(destination)) {
        continue;
      }
      const newPathtoDistance = currentMinDistance + distance;
      const currentDestinationDistance = minDistances[destination];
      if (newPathtoDistance < currentDestinationDistance) {
        minDistances[destination] = newPathtoDistance;
      }
    }
  }
  return minDistances.map((x) => (x === Infinity ? -1 : x));
}

function getVertexWithMinDistance(distances: number[], visited: Set<number>) {
  let currentMinDistance = Infinity;
  let vertex = -1;
  for (const [vertexIdx, distance] of distances.entries()) {
    if (visited.has(vertexIdx)) {
      continue;
    }
    if (distance <= currentMinDistance) {
      vertex = vertexIdx;
      currentMinDistance = distance;
    }
  }
  return [vertex, currentMinDistance];
}
