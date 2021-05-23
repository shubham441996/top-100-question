class PriorityQueue {
  constructor() {
    this.data = [];
  }
  enqueue(val, priority) {
    this.data.push({ val, priority });
    this.data.sort((a, b) => a.priority - b.priority);
  }
  dequeue() {
    return this.data.shift();
  }
  isEmpty() {
    this.data.length ? true : false;
  }
  length() {
    return this.data.length;
  }
  peek() {
    return this.data[0];
  }
}
module.exports = { PriorityQueue };
