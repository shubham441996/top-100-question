class Node {
  constructor(data, left = null, right = null) {
    this.left = left;
    this.right = right;
    this.data = data;
  }
  toString() {
    return `${this.data}`;
  }
}
module.exports = { Node };
