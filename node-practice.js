class Node {
    constructor(value = null, next = null) {
        this.value = value
        this.next = next
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    // adds a new node containing value to the end of the list
    append(value) {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        lastNode.next = new Node(value);
    }

    // adds a new node containing value to the beginning of the list
    prepend(value) {
        let newHead = new Node(value);
        let originalHead = this.head;
        list.head = newHead;
        newHead.next = originalHead;
    }

    // returns the total number of nodes in the list
    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }

    // returns the first node in the list
    getHead() {
        return this.head
    }

    // returns the last node in the list
    getTail() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }

    // returns the node at the given index
    at(index) {
        if (index > this.size() - 1) {
            return 'Error: out of range'
        }
        let counter = 0;
        let node = this.head;
        while (node.next != null) {
            if (counter == index) {
                if (node.next != null) {
                    return `( ${node.value} | ${node.next.value} )`
                };
            };
            counter++;

            node = node.next;
        }
        return `( ${node.value} | null )`;
    }

    // removes the last element from the list 
    pop() {
        if (!this.head) {
            return;
        }
        if (!this.head.next) {
            this.head = null;
        }

        let previous = this.head;
        let node = this.head.next;
        while (node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }

    // returns true if the passed value is in the list
    contains(value) {
        let node = this.head;
        while (node != null) {
            if (node.value == value) {
                return true;
            };
            node = node.next;
        }
        return false;
    }

    // returns the index of the node containing value, or null if not found
    find(value) {
        let counter = 0;
        let node = this.head;
        while (node != null) {
            if (node.value == value) {
                return counter;
            };
            counter++;
            node = node.next;
        }
        return false;
    }

    // represents your LinkedList objects as strings
    // format: ( value ) -> ( value ) -> ( value ) -> ( value )
    toString() {
        let count = 0;
        let nodeMap = "";
        let node = this.head;
        while (node) {
            count++;
            nodeMap += `( ${node.value} ) -> `
            node = node.next
        }
        nodeMap += " null"
        return nodeMap;
    }
  
  // inserts a new node with the provided value at the given index
    insertAt(index, value) {
      if (index > this.size()){
        return "Error: out of range"
      }
      let node = this.head;
      let counter = 0;
        while (node != null) {
          if (counter === index -1){
            let leftNode = node;
            let rightNode = node.next;
            leftNode.next = new Node(value);
            leftNode.next.next = rightNode;
          }
            counter++;
            node = node.next;
        }
    }
  
  // UNFINISHED **
  // removes the node at the given index
    removeAt(index) {
      if (index > this.size()){
        return "Error: out of range"
      }
      let node = this.head;
      let counter = 0;
        while (node != null) {
          if (counter === index -1){
            let leftNode = node;
            let rightNode = node.next;
            leftNode.next = new Node(value);
            leftNode.next.next = rightNode;
          }
            counter++;
            node = node.next;
        }
    }
}

// TESTING

let node1 = new Node(5);
let node2 = new Node(9);
let node3 = new Node(11);

node1.next = node2;
node2.next = node3;

let list = new LinkedList(node1);

console.log(list.toString());
list.insertAt(1, 12)
console.log(list.toString())
list.insertAt(3,20)
console.log(list.toString())
list.insertAt(6,90);