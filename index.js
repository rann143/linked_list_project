class Node {

    constructor(value = null, nextNode = null) {
        this.value = value,
        this.nextNode = nextNode
    }

}

class LinkedList {

    constructor() {
        this.head = null,
        this.tail = null
    }

    append(value) {
        let node = new Node(value);

        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.nextNode = node;
            this.tail = node;
        }

    }

    prepend(value) {
        let node = new Node(value);

        if (this.head === null) {
            this.head = node;
        } else {
            node.nextNode = this.head;
            this.head = node;
        }

    }

    getSize() {
        let size = 0;
        let current = this.head;

        while (current !== null) {
            current = current.nextNode;
            size++;
        }

        return size;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        return this.tail;
    }

    getNodeAt(index) {
        let current = this.head;
        let i = 0;

        while (current !== null) {
            if (i === index) {
                return current;
            }

            current = current.nextNode;
            i++;
        }

        return "No Node At Given Index";

    }

    contains(item) {
        let current = this.head;

        while (current !== null) {
            if (current.value === item) {
                return true;
            }
            current = current.nextNode;
        }

        return false;
    }

    pop() {

        let newTail = this.getNodeAt(this.getSize() - 2);
        newTail.nextNode = null;
        this.tail = newTail;

    }

    findIndexOf(item) {
        let current = this.head;
        let i = 0

        while (current !== null) {
            if (current.value === item) {
                return i;
            }
            
            current = current.nextNode;
            i++;
        }

        return null;
    }

    toString() {
        let current = this.head;
        let string = `${current.value} -> `;

        while (current.nextNode !== null) {
            current = current.nextNode;
            string += `${current.value} -> `;
        }

        return `${string}null`;
    }

    insertNodeAt(newValue, index) {
        let previous = null;
        let current = this.head;

        let originalNode = this.getNodeAt(index);
        let newNode = new Node(newValue)

        while (current !== null && current !== this.getNodeAt(index)) {
            previous = current;
            current = current.nextNode;
        }

        if (current !== null) {
            previous.nextNode = newNode;
            newNode.nextNode = originalNode;
        }

    }

    removeNodeAt(index) {

        let previous = null;
        let current = this.head;

        if (this.head === this.getNodeAt(index)) {
            this.head = current.nextNode;
        }

        
        while (current !== null && current !== this.getNodeAt(index)) {
            previous = current;
            current = current.nextNode;
        }

        if (current !== null && current === this.tail) {
            previous.nextNode = null;
            this.tail = previous
        } else  if (current !== null) {
            previous.nextNode = current.nextNode;
        } else return "No Node At This Index";

    }
    
}


const list = new LinkedList();

list.append("Piña Colada");
list.append("Mojito");
list.append("Daquiri");
list.append("Margarita");
list.append("Old Fashioned");

console.log(list);

const fruitArray = ["apple", "orange", "banana", "avocado", "grapefruit"];


function convertArrayToLinkedList(array) {

    let linkedList = new LinkedList();

    for (let i = 0; i < array.length; i++) {
        linkedList.append(array[i]);
    }
    console.log(linkedList.toString());
    return linkedList;
}
