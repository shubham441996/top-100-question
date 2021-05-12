const { bst } = require("./bst");
class BFS {
  constructor() {
    this.queue = [];
    this.visited = [];
  }
  traverse(tree) {
    if (!tree.root) {
      return [];
    } else {
      let current = tree.root;
      this.queue.push(current);
      while (this.queue.length && current) {
        current = this.queue.shift();
        this.visited.push(current.data);
        if (current.left) {
          this.queue.push(current.left);
        }
        if (current.right) {
          this.queue.push(current.right);
        }
      }
    }
    console.log(this.visited);
  }
}
let bfs = new BFS();
bfs.traverse(bst);
console.log(bfs.visited);
