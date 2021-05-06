class Stack {
  constructor() {
    this.data = [];
  }
  push(data) {
    this.data.push(data);
  }
  pop() {
    this.data.pop();
  }
  peek() {
    return this.data[this.data.length - 1];
  }
}
let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
console.log(`Lat Element is: ${stack.peek()}`);
console.log("List is ", stack.data);
