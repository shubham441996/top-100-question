const { bst } = require("./bst");
class BFS {
  constructor() {
    this.queue = [];
    this.visited = [];
  }
  traverse(tree) {
    console.log(this.visited);
  }
}
let bfs = new BFS();
bfs.traverse(bst);
console.log(bfs.visited);
