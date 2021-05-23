const { PriorityQueue } = require("../queue/priorityQueue");
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdges(vertex, { node, weight }) {
    this.adjacencyList[vertex].push({ node, weight });
    this.adjacencyList[node].push({ node: vertex, weight });
  }
  /**
   * Find Shortest path Dijkstra's Algorithm.
   */
  findShortestPath(start, end) {
    let priority = new PriorityQueue();
    let previous = {};
    let current;
    let path = [];
    let distance = Object.keys(this.adjacencyList).reduce((a, b) => {
      if (b === start) {
        a[b] = 0;
        priority.enqueue(b, 0);
      } else {
        a[b] = Number.POSITIVE_INFINITY;
        priority.enqueue(b, Number.POSITIVE_INFINITY);
      }
      previous[b] = null;
      return a;
    }, {});

    while (priority.data.length) {
      current = priority.dequeue().val;
      //   console.log(previous, distance, current);
      if (current === end) {
        while (previous[current]) {
          path.push(current);
          current = previous[current];
        }
        break;
      }
      if (current || distance[current] !== Number.POSITIVE_INFINITY) {
        this.adjacencyList[current].forEach((neighbor) => {
          console.log(neighbor, current);
          let candidate = distance[current] + neighbor.weight;
          let nextNeighborKey = neighbor.node;
          console.log(
            "Before",
            candidate,
            distance[nextNeighborKey],
            previous[nextNeighborKey]
          );
          if (candidate < distance[nextNeighborKey]) {
            distance[nextNeighborKey] = candidate;
            previous[nextNeighborKey] = current;
            priority.enqueue(nextNeighborKey, candidate);
          }
          console.log(
            "After",
            candidate,
            distance[nextNeighborKey],
            previous[nextNeighborKey]
          );
        });
      }
    }

    console.log(path);
  }
}

let weightedGraph = new WeightedGraph();
weightedGraph.addVertex("A");
weightedGraph.addVertex("B");
weightedGraph.addVertex("C");
weightedGraph.addVertex("D");
weightedGraph.addVertex("E");
weightedGraph.addVertex("F");

weightedGraph.addEdges("A", { node: "B", weight: 4 });
weightedGraph.addEdges("A", { node: "C", weight: 2 });
weightedGraph.addEdges("B", { node: "E", weight: 3 });
weightedGraph.addEdges("C", { node: "D", weight: 2 });
weightedGraph.addEdges("C", { node: "F", weight: 4 });
weightedGraph.addEdges("D", { node: "E", weight: 3 });
weightedGraph.addEdges("D", { node: "F", weight: 1 });
weightedGraph.addEdges("F", { node: "E", weight: 1 });

console.log(weightedGraph.findShortestPath("A", "E"));
