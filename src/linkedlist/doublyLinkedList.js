class Node {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
  toString() {
    return `${this.data}`;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addNodeInLast(data) {
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
  }
  addFront(data) {
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
  }
  getNodeAt(index) {
    let count = 0;
    let next = this.head;
    while (next) {
      if (count === index) {
        return next;
      }
      count++;
      next = next.next;
    }
    return null;
  }
  addAfter(data, index) {
    let node = new Node(data);
    let previousNode = this.getNodeAt(index - 1);

    let nextNode = previousNode.next;

    //NOTE: Attach previous Node
    previousNode.next = node;
    nextNode.prev = node;

    //NOTE:Attach Next Node
    node.prev = previousNode;
    node.next = nextNode;
    // console.log(node);
  }
  toString() {
    let next = this.head;
    let str = ``;
    while (next) {
      str += `${next} --> `;
      next = next.next;
    }
    return str;
  }
  removeNodeAtIndex(index) {
    let node = this.getNodeAt(index);
    console.log(node.toString());
    if (node) {
      let previousNode = node.prev;
      let nextNode = node.next;
      node.prev = null;
      node.next = null;
      previousNode.next = nextNode;
      nextNode.prev = previousNode;
      console.log(nextNode.toString(), previousNode.toString());
    }
  }
}
let list = new DoublyLinkedList();
list.addNodeInLast(10);
list.addNodeInLast(20);
list.addNodeInLast(30);
list.addNodeInLast(40);
list.addFront(5);
list.addAfter(25, 3);
list.removeNodeAtIndex(2);
console.log(list.toString());
