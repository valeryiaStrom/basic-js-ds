const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.queue = [];
    this.head = null;
  }

  getUnderlyingList() {
    return this.queue[0];
  }

  enqueue(value) {
    const newNode= new ListNode(value);

    this.queue.push(newNode)
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = newNode;

    }
    console.log(this.queue)
  }

  dequeue() {
    const deleted = this.queue.shift();
    return deleted.value;
  }
}

module.exports = {
  Queue
};

