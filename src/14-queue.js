const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.queue = new ListNode();
    this.queue.next = null;
  }

  get size() {
    return this.newInd - this.oldInd;
  }

  enqueue(element) {
    if (this.queue.value === undefined) {
      this.queue.value = element;
    } else {
      let iter = this.queue;
      while (iter.next !== null) {
        iter = iter.next;
      }
      iter.next = new ListNode();
      iter.next.value = element;
    }
  }

  dequeue() {
    const elem = this.queue.value;
    this.queue = this.queue.next;
    return elem;
  }
}

module.exports = Queue;
