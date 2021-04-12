/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.size = 0;
    this.data = [];
  }

  push (element) {
    this.size++;
    this.data.push(element);
  }

  pop() {
    const elem = this.data[this.size - 1];
    this.size--;
    this.data.pop();
    return elem;
  }

  peek() {
    return this.data[this.size - 1];
  }
}

module.exports = Stack;
