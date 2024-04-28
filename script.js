class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const currentHead = this.head;

      this.head = newNode;
      this.head.next = currentHead;
    }

    this.length++;
  }

  size() {
    console.log(`The linked list length is currently ${this.length}`);
  }

  showHead() {
    console.log(this.head);
  }

  showTail() {
    console.log(this.tail);
  }

  at(index) {
    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    console.log(currentNode);
  }

  pop() {
    // If the tree is empty
    if (!this.head) {
      console.log("Cannot remove any nodes - The list is empty!");
      return;
    }

    // If the tree only has one node
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return;
    }

    // If the tree has 2+ nodes
    let currentNode = this.head;
    let previousNode = null;

    for (let i = 0; i < this.length - 1; i++) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    previousNode.next = null;
    this.tail = previousNode;
    this.length--;
  }

  contains(value) {
    // If the tree is empty
    if (!this.head) {
      console.log(
        `The list does not have a value of ${value} since it is empty.`
      );
      return false;
    }

    let currentNode = this.head;

    for (let i = 0; i < this.length; i++) {
      if (currentNode.data == value) {
        return true;
      }
      currentNode = currentNode.next;
    }

    return false;
  }

  find(value) {
    // If the tree is empty
    if (!this.head) {
      console.log(
        `The list does not have a value of ${value} since it is empty.`
      );
      return false;
    }

    let index = 0;
    let currentNode = this.head;

    for (let i = 0; i < this.length; i++) {
      if (currentNode.data == value) {
        console.log(
          `The node with a value of ${value} has an index of ${index}.`
        );
        return;
      }
      currentNode = currentNode.next;
      index++;
    }

    console.log(`The list does not have a value of ${value}.`);
  }

  toString() {
    let currentNode = this.head;
    let nodeToString = "";

    for (let i = 0; i < this.length; i++) {
      let stringfiedNode = "( " + currentNode.data.toString() + " )" + " -> ";
      nodeToString = nodeToString + stringfiedNode;
      currentNode = currentNode.next;
    }

    nodeToString = nodeToString + "null";
    console.log(nodeToString);
  }

  insertAt(value, index) {
    // Check if the index is out of bounds
    if (index < 0 || index > this.length) {
      console.log(`Index ${index} is out of bounds.`);
      return;
    }

    const newNode = new Node(value);

    // If the tree is empty (index 0)
    if (index === 0) {
      this.prepend(value);
      return;
    }

    // If the tree is not empty
    let currentNode = this.head;
    let previousNode = null;
    let currentIndex = 0;

    while (currentNode && currentIndex < index) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }

    previousNode.next = newNode;
    newNode.next = currentNode;

    // If its the tail node
    if (currentIndex === this.length) {
      this.tail = newNode;
    }

    this.length++;
  }

  removeAt(index) {
    // Check if the index is out of bounds
    if (index < 0 || index > this.length) {
      console.log(`Index ${index} is out of bounds.`);
      return;
    }

    // If our tree is empty, only has one node, or we are targeting the tail
    if (this.length <= 1 || this.length - 1 == index) {
      this.pop();
      return;
    }

    // If our tree holds more than one node and we are not targeting the tail
  }
}

// We run our LinkedList functions with this function
function runLinkedList() {
  let list = new LinkedList();

  list.append(10); // adds a new node of 10 to the end of our list (10 is our current head)
  list.append(20); // adds a new node of 20 to the end of our list
  list.prepend(5); // adds a new node of 5 to the beginning of our list (5 is our current head)
  console.log(list.contains(20)); // our list does have a value of 20, so it displays true
  console.log(list.contains("b")); // our list does not have a value of b, so it displays false
  list.find(5); // indicates that 5 exists and is located at index 0
  list.find(20); // indicates that 20 exists and is located at index 2
  list.find(8000); // indicates that 8000 does not exist
  list.size(); // displays the linked list length, which is currently 3
  list.showHead(); // displays the list's head, which is currently (5)
  list.showTail(); // displays the list's tail, which is currently (20)
  list.pop(); // removes the lits's tail
  list.append(20); // adds a new node of 20 to the end of our list
  list.insertAt(999, 1); // inserts the value of 999 at index 1
  list.toString(); // displays our list in the console, which should be (5) -> (999) -> (10) -> (20) -> null
}

// We also run them with an empty list
function runEmptyLinkedList() {
  let emptyList = new LinkedList();

  console.log(emptyList.contains(20)); // throws an error message since the tree is empty
  emptyList.showHead(); // displays null
  emptyList.showTail(); // displays null
  emptyList.pop(); // throws an error message since the tree is empty
  emptyList.size(); // displays the linked list length, which is currently 0
  emptyList.toString(); // displays our list in the console, it should be null
  emptyList.insertAt(9000, 2); // displays an error since index 2 is out of bounds
}

runLinkedList();
// runEmptyLinkedList();
