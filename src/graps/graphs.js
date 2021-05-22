/**
 * Two Methods for implementing a graph
 * 1. Adjacency Metrics
 *
 * 2. Adjacency List
 */

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(data) {
    let element = this.adjacencyList[data];
    if (!element) {
      this.adjacencyList[data] = [];
    }
  }
  addEdge(key, value) {
    let keyElement = this.adjacencyList[key];
    let valueElement = this.adjacencyList[value];
    if (keyElement) {
      keyElement.push(value);
    } else {
      this.adjacencyList[key] = [value];
    }
    if (valueElement) {
      valueElement.push(key);
    } else {
      this.adjacencyList[value] = [key];
    }
  }
  removeEdge(key, value) {
    let keyElement = this.adjacencyList[key];
    let valueElement = this.adjacencyList[value];
    if (keyElement) {
      keyElement = keyElement.filter((element) => element !== value);
    }
    if (valueElement) {
      valueElement = valueElement.filter((element) => element !== key);
    }
    this.adjacencyList[value] = valueElement;
    this.adjacencyList[key] = keyElement;
  }
  removeVertex(inputKey) {
    delete this.adjacencyList[inputKey];
    Object.entries(this.adjacencyList).forEach(([key, value]) => {
      value = value.filter((element) => element !== inputKey);
      this.adjacencyList[key] = value;
    });
  }
  dfsTraversal(vertex) {
    let visitedVertex = {};
    let orderList = [];
    let self = this;
    function traverse(vertex) {
      if (
        !(self.adjacencyList[vertex] && self.adjacencyList[vertex].length > 0)
      ) {
        return;
      }
      orderList.push(vertex);
      visitedVertex[vertex] = true;
      self.adjacencyList[vertex].forEach((ele) => {
        if (!visitedVertex[ele]) {
          traverse(ele);
        }
      });
    }
    traverse(vertex);
    return orderList;
  }
  bfsTraversal(vertex) {
    let queue = [];
    let visited = {};
    let order = [];
    let current = vertex;
    queue.push(current);
    while (queue.length && current) {
      let ele = this.adjacencyList[current];
      visited[current] = true;
      order.push(current);
      queue.shift();
      ele.forEach((a) => {
        if (!visited[a]) {
          queue.push(a);
          visited[a] = true;
        }
      });
      current = queue[0];
    }
    return order;
  }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.table(g);
console.log(g.bfsTraversal("A"));
