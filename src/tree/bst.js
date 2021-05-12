const Nodes = require("./node");
let { Node } = Nodes;
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(data) {
    let node = new Node(data);
    if (!this.root) {
      this.root = node;
      return this.root;
    } else {
      let position = this.root;
      while (position != null) {
        if (position.data < node.data) {
          if (!position.right) {
            position.right = node;
            return this.root;
          }
          position = position.right;
        } else if (position.data > node.data) {
          if (!position.left) {
            position.left = node;
            return this.root;
          }
          position = position.left;
        } else {
          return this.root;
        }
      }
    }
  }
  find(data) {
    if (!this.root) {
      return null;
    } else {
      let current = this.root;
      while (current) {
        if (current.data === data) {
          return current;
        } else if (current.data > data) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
      return null;
    }
  }
  bfs() {
    let queue = [];
    let visited = [];
    if (!this.root) {
      return [];
    } else {
      let current = this.root;
      queue.push(current);
      while (queue.length && current) {
        current = queue.shift();
        visited.push(current.data);
        if (current.left) {
          queue.push(current.left);
        }
        if (current.right) {
          queue.push(current.right);
        }
      }
    }
    return visited;
  }
  dfsPreOrder() {
    let visited = [];
    let current = this.root;
    function traverse(current) {
      visited.push(current.data);
      if (current.left) {
        traverse(current.left);
      }
      if (current.right) {
        traverse(current.right);
      }
    }
    traverse(current);
    return visited;
  }
  dfsPostOrder() {
    let visited = [];
    let current = this.root;
    function traverse(current) {
      if (current.left) {
        traverse(current.left);
      }
      if (current.right) {
        traverse(current.right);
      }
      visited.push(current.data);
    }
    traverse(current);
    return visited;
  }

  dfsInOrder() {
    let visited = [];
    let current = this.root;
    function traverse(current) {
      if (current.left) {
        traverse(current.left);
      }
      visited.push(current.data);
      if (current.right) {
        traverse(current.right);
      }
    }
    traverse(current);
    return visited;
  }
}
let bst = new BinarySearchTree();
bst.insert(6);
bst.insert(4);
bst.insert(10);
bst.insert(2);
bst.insert(5);
bst.insert(7);
bst.insert(12);
bst.insert(1);
bst.insert(3);
//console.log(bst);
// console.log(bst.find(4));
console.log(bst.dfsInOrder());
module.exports = { bst };
