const Node = require("./node");
class SinglyLinkedList {
  constructor() {
    this.head = null;
  }
  //NOTE: Add Node at last
  addNodeAtLast(data) {
    let node = new Node(data);
    let next = this.head;
    if (!next) {
      this.head = node;
    } else {
      while (next && next.next) {
        next = next.next;
      }
      next.next = node;
    }
  }
  //NOTE: At Node at Start
  addNodeAtStart(data) {
    let node = new Node(data);
    node.next = this.head;
    this.head = node;
  }
  //NOTE: Get Node data
  getNodeAt(index) {
    let next = this.head;
    let tempIndex = 0;
    while (next) {
      if (tempIndex == index) {
        return next;
      } else {
        next = next.next;
        tempIndex++;
      }
    }
    return null;
  }
  //NOTE: Add Node At Index
  addNodeAtIndex(index, data) {
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    } else if (index === 0) {
      node.next = this.head;
      this.head = node;
      return;
    }
    let next = this.getNodeAt(index - 1);
    if (next) {
      node.next = next.next;
      next.next = node;
    }
  }
  //NOTE: Deleting the first node.
  deleteFirstNode() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }
  //NOTE: Deleting the last node.
  deleteLastNode() {
    if (!this.head) {
      return;
    } else {
      let next = this.head;
      let prev = this.head;
      while (next.next) {
        prev = next;
        next = next.next;
      }
      prev.next = null;
      return this.head;
    }
  }
  deleteNodeAtIndex(index) {
    // node needs to be deleted from the front of the list i.e. before the head.
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    const previous = this.getNodeAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }

    previous.next = previous.next.next;
    return this.head;
  }
}
let list = new SinglyLinkedList();
list.addNodeAtLast(10);
list.addNodeAtLast(20);
list.addNodeAtLast(30);
list.addNodeAtLast(40);
list.addNodeAtLast(50);
list.addNodeAtIndex(1, 25);

console.log(list);
