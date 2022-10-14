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
        if (index > list.size() - 1) {
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

}