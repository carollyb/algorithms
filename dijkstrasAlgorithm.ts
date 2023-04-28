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
//segunda opção usando heap:
export function dijkstrasAlgorithm2(start: number, edges: number[][][]) {
  let numberOfVertices = edges.length;
  let minDistances = new Array(numberOfVertices).fill(Infinity);
  let initialDistances: [number, number][] = Array.from(
    { length: edges.length },
    (_, i) => [i, Infinity]
  );
  minDistances[start] = 0;
  const minDistancesHeap = new MinHeap(initialDistances);
  minDistancesHeap.update(start, 0);
  while (!minDistancesHeap.isEmpty()) {
    const [vertex, currentMinDistance] = minDistancesHeap.remove()!;
    if (currentMinDistance === Infinity) {
      break;
    }
    for (const edge of edges[vertex]) {
      let [destination, distance] = edge;
      const newPathtoDistance = currentMinDistance + distance;
      const currentDestinationDistance = minDistances[destination];
      if (newPathtoDistance < currentDestinationDistance) {
        minDistances[destination] = newPathtoDistance;
        minDistancesHeap.update(destination, newPathtoDistance);
      }
    }
  }
  return minDistances.map((x) => (x === Infinity ? -1 : x));
}
class MinHeap {
  vertexMap: { [vertex: number]: number };
  heap: number[];

  constructor(array: number[]) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array: number[]) {
    let firstParentIdx = Math.floor((array.length - 2) / 2);
    for (let i = firstParentIdx; i >= 0; i--) {
      this.siftDown(i, array.length - 1, array);
    }
    return array;
  }

  siftDown(currentIdx: number, endIdx: number, heap: number[]) {
    let childOneIdx = currentIdx * 2 + 1;
    while (childOneIdx <= endIdx) {
      let childTwoIdx: number;
      let idxToSwap: number;
      currentIdx * 2 + 2 <= endIdx
        ? (childTwoIdx = currentIdx * 2 + 2)
        : (childTwoIdx = -1);
      if (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
        idxToSwap = childTwoIdx;
      } else {
        idxToSwap = childOneIdx;
      }
      if (heap[idxToSwap] < heap[currentIdx]) {
        this.swap(currentIdx, idxToSwap, heap);
        currentIdx = idxToSwap;
        childOneIdx = currentIdx * 2 + 1;
      } else {
        return;
      }
    }
  }

  siftUp(currentIdx: number, heap: number[]) {
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
      this.swap(currentIdx, parentIdx, heap);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }

  peek() {
    return this.heap[0];
  }

  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    const valueToRemove = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return valueToRemove;
  }

  insert(value: number) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }

  swap(i: number, j: number, heap: number[]) {
    const valueToReplace = heap[j];
    heap[j] = heap[i];
    heap[i] = valueToReplace;
  }
}
