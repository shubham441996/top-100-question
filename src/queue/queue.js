class Queue {
  constructor() {
    this.data = [];
  }
  enqueue(ele) {
    this.data.push(ele);
  }
  dequeue() {
    this.data.shift();
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
let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.dequeue();
console.log(queue.data);
